function nextStep(selectedVal)
{

    
    currentUrl =  this.location.href;
    currentParamsIndex = currentUrl.search(".html") + 5;
    currentParams = currentUrl.substring(currentParamsIndex);

    stepNumberIndex = currentUrl.search("/step") + 5;
    currentStepStr = currentUrl.substring(stepNumberIndex)[0];
    currentStep = parseInt(currentStepStr);


    nextStepStr = (currentStep + 1) + "";
    var query = getQueryParams(document.location.search);

    if (query.referral)
    {
        nextUrl = "step" + nextStepStr + ".html" + currentParams + "&q" + currentStep + "=" + selectedVal;
    }
    else
    {
        if (currentStep == 0)
        {
            nextUrl = "step" + nextStepStr + ".html" + "?q" + currentStep + "=" + selectedVal;
        }
        else
        {
            nextUrl = "step" + nextStepStr + ".html" + currentParams + "&q" + currentStep + "=" + selectedVal;
        }
    }




    this.location = nextUrl;
     
}


function computeTotal()
{

    var query = getQueryParams(document.location.search);

	q0 = {0: 500    , 1: 500    , 2: 1000};
	q1 = {0: 500    , 1: 1000   , 2: 0      , 3: 1000};
	q2 = {0: 500    , 1: 0      , 2: 500};
	q3 = {0: 0      , 1: 500    , 2: 0      , 3:250};
	q4 = {0: 1000   , 1: 250    , 2: 1000};
	q5 = {0: 1000   , 1: 0      , 2: 1000};
	q6 = {0: 200    , 1: 0      , 2: 200};
	q7 = {0: 500    , 1: 1000   , 2: 1250    , 3:1750};
	//q8 = {0: 0      , 1: 4000    , 2: 4000};

    price_0 = q0[parseInt(query.q0)];
    price_1 = q1[parseInt(query.q1)];
    price_2 = q2[parseInt(query.q2)];
    price_3 = q3[parseInt(query.q3)];
    price_4 = q4[parseInt(query.q4)];
    price_5 = q5[parseInt(query.q5)];
    price_6 = q6[parseInt(query.q6)];
    price_7 = q7[parseInt(query.q7)];
    //price_8 = q7[parseInt(query.q8)];

    total = price_0 + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7;// + price_8;

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


function goToHome()
{

    var query = getQueryParams(document.location.search);

    if (query.referral)
    {
        this.location = "index.html?referral=" + query.referral;
    }
    else
    {
        this.location = "index.html";
    }
    
}

function start()
{

    var query = getQueryParams(document.location.search);

    if (query.referral)
    {
        this.location = "step0.html?referral=" + query.referral;
    }
    else
    {
        this.location = "step0.html";
    }
    
}
