function nextStep(selectedVal)
{

    
    currentUrl =  this.location.href;
    currentParamsIndex = currentUrl.search(".html") + 5;
    currentParams = currentUrl.substring(currentParamsIndex);

    stepNumberIndex = currentUrl.search("/step") + 5;
    currentStepStr = currentUrl.substring(stepNumberIndex)[0];
    currentStep = parseInt(currentStepStr);


    nextStepStr = (currentStep + 1) + "";

    if (currentStep == 0)
    {
        nextUrl = "step" + nextStepStr + ".html" + "?q" + currentStep + "=" + selectedVal;
    }
    else
    {
        nextUrl = "step" + nextStepStr + ".html" + currentParams + "&q" + currentStep + "=" + selectedVal;
    }


    this.location = nextUrl;
     
}


function computeTotal()
{

    var query = getQueryParams(document.location.search);

    q0 = {0: 500    , 1: 500    , 2: 900};
    q1 = {0: 200    , 1: 300    , 2: 0      , 3: 300};
    q2 = {0: 300    , 1: 0      , 2: 300};
    q3 = {0: 50     , 1: 100    , 2: 0      , 3:100};
    q4 = {0: 200    , 1: 0      , 2: 200};
    q5 = {0: 200    , 1: 0      , 2: 200};
    q6 = {0: 200    , 1: 0      , 2: 200};
    q7 = {0: 0      , 1: 500    , 2: 250};
    q8 = {0: 0      , 1: 10     , 2: 150    , 3:300};

    price_0 = q0[parseInt(query.q0)];
    price_1 = q1[parseInt(query.q1)];
    price_2 = q2[parseInt(query.q2)];
    price_3 = q3[parseInt(query.q3)];
    price_4 = q4[parseInt(query.q4)];
    price_5 = q5[parseInt(query.q5)];
    price_6 = q6[parseInt(query.q6)];
    price_7 = q7[parseInt(query.q7)];
    price_8 = q7[parseInt(query.q8)];


    total = price_0 + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7 + price_8;

    return total;
    

}

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}
