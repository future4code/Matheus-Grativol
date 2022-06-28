import { performPurchase } from "../src"
import { User } from "../src/types"

test("balance > que value", ()=>{
    const user: User = {
        name: "Matheus",
        balance: 150
    }

    const result = performPurchase(user, 50)
    const balanceResult = user.balance - 50

    expect(result).toEqual({
        name:"Matheus",
        balance: balanceResult
    })
})

test("balance = value", ()=>{
    const user: User = {
        name: "Daniela",
        balance: 100
    }

    const result = performPurchase(user, 100)
    const balanceResult = user.balance - 100

    expect(result).toEqual({
        name:"Daniela",
        balance:balanceResult
    })
})

test("balance < value", ()=>{
    const user: User = {
        name: "Salomão",
        balance: 100
    }

    const result = performPurchase(user, 110)

    expect(result).not.toBeDefined()
})