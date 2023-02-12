document.getElementById('btn-deposit').addEventListener('click', function(){
    const money = document.getElementById('input-money');
    const inputMoneyString = money.value;
    const inputMoney = parseFloat(inputMoneyString);
    // console.log(inputMoney);

    const depositValue = document.getElementById('deposit');
    const depositValueString = depositValue.innerText;
    const depositPrevious = parseFloat(depositValueString);
    // console.log(depositPrevious);

    const totalDeposit = depositPrevious + inputMoney;
    depositValue.innerText = totalDeposit;

    const availableBalance = document.getElementById('available-balance');
    const availableBalanceString = availableBalance.innerText;
    const availableBalancePrevious = parseFloat(availableBalanceString);

    const totalAvailableBalance = availableBalancePrevious + inputMoney;
    availableBalance.innerText = totalAvailableBalance;

    money.value = '';
});

// Withdraw section

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const money = document.getElementById('input-withdraw');
    const inputMoneyString = money.value;
    const inputMoney = parseFloat(inputMoneyString);

    const withdrawValue = document.getElementById('withdraw');
    const withdrawValueString = withdrawValue.innerText;
    const withdrawValuePrevious = parseFloat(withdrawValueString);

    const totalWithdraw = withdrawValuePrevious + inputMoney;
    withdrawValue.innerText = totalWithdraw;

    const availableBalance = document.getElementById('available-balance');
    const availableBalanceString = availableBalance.innerText;
    const availableBalancePrevious = parseFloat(availableBalanceString);

    const totalAvailableBalance = availableBalancePrevious - inputMoney;
    availableBalance.innerText = totalAvailableBalance;
});