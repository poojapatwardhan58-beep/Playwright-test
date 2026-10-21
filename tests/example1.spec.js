
const{test, expect}=require ('@playwright/test')
test("MyFirst Test", async function({page}){
    expect (12).toBe(12)
})
test("MySecond Test", async function({page}){
    expect(100).toBe(101)
})
test("MyThird Test", async function({page}){
    expect(2.0). toBe(2.0)
})