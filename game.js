$(document).ready(function(){
    var amount = 1000;
    $('.updateAmount').click(function(){
        amount -= 100;

        if(amount < 100)
        {
            console.log("done");
            return;
        }

        var no1, no2, no3;
        no1 = Math.ceil((Math.random()*10));
        no2 = Math.ceil((Math.random()*10));
        no3 = Math.ceil((Math.random()*10));

        console.log(no1+" "+no2+" "+no3+" ");
        console.log("initial "+amount);

        if((even(no1) && even(no2) && even(no3)) || (odd(no1) && odd(no2) && odd(no3)))
        {
            amount += 300;
            console.log("change "+amount);
        }
        else if(ifSequence(no1,no2,no3))
        {
            amount += 800;
            console.log("change "+amount);
        }
        else if((no1 == no2) && (no2 == no3))
        {
            amount += 1000;
            console.log("change "+amount);
        }
        else
        {
            amount += 0;
            console.log("change "+amount);
        }

    });
});

function even(number){
    if (number % 2 == 0){
       return 1;
    }
    else {
        return 0;
    }
}

function odd(number){
    if (number % 2 != 0){
        return 1;
    }
    else {
        return 0;
    }
}

function ifSequence(num1,num2,num3){
    var arr = [num1,num2,num3];

    arr.sort(function(a,b){
        return a-b;
    });

    if (((arr[1] - arr[0]) == 1) && ((arr[2] - arr[1]) == 1)) {
        return 1;
    }
    else{
        return 0;
    }
}


