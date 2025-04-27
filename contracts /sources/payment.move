
module contracts::payment;

// === Imports ===
use std::string::String;
use sui::{display, package, balance::{Self, Balance}, sui::SUI, coin::{Coin, value, into_balance}, event};


    const EInsufficientBalance: u64 = 1;
public struct Profile has key, store {
    id: UID,
    name: String,
    surname: String,
    balance: Balance<SUI>,
    total_earned: u64,
    total_transactions: u64
}

// === Events ===
    public struct ProfileCreated has copy, drop {
        influencer_id: ID,
        name: String,
        surname: String
    }

    public struct PaymentReceived has copy, drop {
        influencer_id: ID,
        amount: u64,
        sender: address
    }

    public struct Withdrawal has copy, drop {
        influencer_id: ID,
        amount: u64
    }

// === Public Functions ===

    /// Create a new influencer profile
    public fun create_profile(
        name: String,
        surname: String,
        ctx: &mut TxContext
    ): Profile {
        let profile = Profile {
            id: object::new(ctx),
            name,
            surname,
            balance: balance::zero(),
            total_earned: 0,
            total_transactions: 0
        };

        event::emit(ProfileCreated {
            influencer_id: object::id(&profile),
            name: copy name,
            surname: copy surname
        });

        profile
    }

    
    /// Send payment to an influencer
    public fun send_payment(
        profile: &mut Profile,
        payment: Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let amount = value(&payment);
        let sender = tx_context::sender(ctx);

        // Add to influencer's balance
        balance::join(&mut profile.balance, into_balance(payment));
        
        // Update stats
        profile.total_earned = profile.total_earned + amount;
        profile.total_transactions = profile.total_transactions + 1;

        event::emit(PaymentReceived {
            influencer_id: object::id(profile),
            amount,
            sender
        });
    }


/// Withdraw funds from influencer profile
    // public fun withdraw(
    //     profile: &mut Profile,
    //     amount: u64,
    //     ctx: &mut TxContext
    // ): Coin<SUI> {
    //     assert!(balance::value(&profile.balance) >= amount, EInsufficientBalance);

    //     let coins = balance::split(&mut profile.balance, amount);
    //     let coin = into_coin(coins, ctx);

    //     event::emit(Withdrawal {
    //         influencer_id: object::id(profile),
    //         amount
    //     });

    //     coin
    // }

       // === View Functions ===

    /// Get influencer profile info
    public fun get_profile_info(profile: &Profile): (String, String, u64, u64) {
        (
            profile.name,
            profile.surname, 
            profile.total_earned,
            profile.total_transactions
        )
    }
