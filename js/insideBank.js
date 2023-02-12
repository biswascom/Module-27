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