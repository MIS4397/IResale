    names = new Array();
    descriptions = new Array();
    priceBuy = new Array();
    monthBuy = new Array();
    monthBuyIndex = new Array();
    numberBuyDays = new Array();
    yearBuy = new Array();
    yearBuyIndex = new Array();
    dayBuy = new Array();
    dayBuyIndex = new Array();
    priceSold = new Array();
    monthSell = new Array();
    monthSellIndex = new Array();
    yearSell = new Array();
    yearSellIndex = new Array();
    daySell = new Array();
    daySellIndex = new Array();
    numberSellDays = new Array();
    daysToSell = new Array();
    profits = new Array();
    percentReturn = new Array();
    itemNumber = new Array();
    quantity = new Array();
    startBid = new Array();
    highestBid = new Array();
    endTimes = new Array();
    monthEnd = new Array();
    yearEnd = new Array();
    dayEnd = new Array();
    numberEndDays = new Array();
    hourEnd = new Array();
    minuteEnd = new Array();
    morningEnd = new Array();
    reserve = new Array();
    buyItNow = new Array();
    shipping = new Array();
    shipLength = new Array();
    shipLengthUnits = new Array();
    shipLengthUnitsIndex = new Array();
    shipWidth = new Array();
    shipWidthUnits = new Array();
    shipWidthUnitsIndex = new Array();
    shipHeight = new Array();
    shipHeightUnits = new Array();
    shipHeightUnitsIndex = new Array();
    shipWeight = new Array();
    shipWeightUnits = new Array();
    shipWeightUnitsIndex = new Array();
    images = new Array();
    averageProfit = 0;
    averagePercentReturn = 0;
    index = 0;
    newItem = "true";

    username = "";
    password = "";

    originalName = "";

    //resets values in item form to default values
    function resetWizard() {
        alert("test");
        window.location.href = "#page8";
        document.itemEdit.name.value = "";
        document.itemEdit.quantity.value = "";
        document.itemEdit.description.value = "";
        document.itemEdit.purchasePrice.value = "";
        document.itemEdit.monthBuy.selectedIndex = 0;
        document.itemEdit.dayBuy.selectedIndex = 0;
        document.itemEdit.yearBuy.selectedIndex = 4;
        document.itemEdit.monthSell.selectedIndex = 0;
        document.itemEdit.daySell.selectedIndex = 0;
        document.itemEdit.yearSell.selectedIndex = 4;
        document.itemEdit.sellPrice.value = "";
        document.itemEdit.itemNumber.value = "";
        document.itemEdit.highestBid.value = "";
        itemImage.innerHTML = "<img src=iresell.JPG width=125>";
        auctionDate.innerHTML = "";
        auctionTime.innerHTML = "";
        index = descriptions.length;
        newItem = "true";
    }

    //sets values in item form to values based on an item number
    function setWizard(k) {
        window.location.href = "#page8";
        document.itemEdit.name.value = names[k];
        originalName = names[k];
        document.itemEdit.quantity.value = quantity[k];
        document.itemEdit.description.value = descriptions[k];
        document.itemEdit.purchasePrice.value = priceBuy[k];
        document.itemEdit.monthBuy.selectedIndex = monthBuyIndex[k];
        document.itemEdit.dayBuy.selectedIndex = dayBuyIndex[k];
        document.itemEdit.yearBuy.selectedIndex = yearBuyIndex[k];
        document.itemEdit.monthSell.selectedIndex = monthSellIndex[k];
        document.itemEdit.daySell.selectedIndex = daySellIndex[k];
        document.itemEdit.yearSell.selectedIndex = yearSellIndex[k];
        document.itemEdit.sellPrice.value = priceSold[k];
        document.itemEdit.itemNumber.value = itemNumber[k];
        document.itemEdit.highestBid.value = highestBid[k];
        itemImage.innerHTML = "<img src=" + images[k] + " width=125>";
        auctionDate.innerHTML = monthEnd[k] + " " + dayEnd[k] + ", " + yearEnd[k];
        auctionTime.innerHTML = hourEnd[k] + ":" + minuteEnd[k] + " " + morningEnd[k];
        index = k;
        newItem = "false";
    }

    function editItem(itemNumbers, q) {
        if (itemNumbers == -1) {
            l = descriptions.length;
        }
        else {
            l = itemNumbers;
        }
        l = index;
        color = "#E8E8E8";
        colorIndex = 0;
        htmlString = "<table width=100% border=1 cellpadding=10>" +
                            "<thead>" +
                            "<tr>" +
                                "<th colspan=2></th>" +
                                "<th>Item Name</th>" +
                                "<th>Buy/Sell Price</th>" +
                                "<th>Profit</th>" +
                                "<th>Percent Return</th>" +
                                "</tr>" +
                                "</thead>" +
                                "<tbody>";
        if(l==descriptions.length){
            originalName = names[l];
        }
        names[l] = document.itemEdit.name.value;
        quantity[l] = document.itemEdit.quantity.value;
        descriptions[l] = document.itemEdit.description.value;
        priceBuy[l] = document.itemEdit.purchasePrice.value;
        e = document.itemEdit.monthBuy;
        monthBuy[l] = e.options[e.selectedIndex].value;
        monthBuyIndex[l] = document.itemEdit.monthBuy.selectedIndex;
        e = document.itemEdit.yearBuy;
        yearBuy[l] = e.options[e.selectedIndex].value;
        yearBuyIndex[l] = document.itemEdit.yearBuy.selectedIndex;
        e = document.itemEdit.dayBuy;
        dayBuy[l] = e.options[e.selectedIndex].value;
        dayBuyIndex[l] = document.itemEdit.dayBuy.selectedIndex;
        numberBuyDays[l] = dayBuyIndex[l] + 1;
        for (i = 0; i < monthBuyIndex[l]; i++) {
            if ((i <= 6 && i % 2 == 0) || (i >= 7 && i % 2 == 1)) {
                numberBuyDays[l] += 31;
            }
            if (((i < 6 && i % 2 == 1) || (i > 7 && i % 2 == 0)) && i != 1) {
                numberBuyDays[l] += 30;
            }
            if (i == 1) {
                if (yearBuy[index] % 4 == 0) {
                    numberBuyDays[l] += 29;
                }
                else {
                    numberBuyDays[l] += 28;
                }
            }
        }
        for (i = 0; i < yearBuyIndex[l]; i++) {
            if (i % 4 == 0) {
                numberBuyDays[l] += 366;
            }
            else {
                numberBuyDays[l] += 365;
            }
        }
        priceSold[l] = document.itemEdit.sellPrice.value;

        e = document.itemEdit.monthSell;
        monthSell[l] = e.options[e.selectedIndex].value;
        monthSellIndex[l] = document.itemEdit.monthSell.selectedIndex;

        e = document.itemEdit.yearSell;
        yearSell[l] = e.options[e.selectedIndex].value;
        yearSellIndex[l] = document.itemEdit.yearSell.selectedIndex;

        daySellIndex[l] = document.itemEdit.daySell.selectedIndex;
        daySellIndex[l] = daySellIndex[l] + 1;

        numberSellDays[l] = daySellIndex[l] + 1;
        for (i = 0; i < monthSellIndex[l]; i++) {
            if ((i <= 6 && i % 2 == 0) || (i >= 7 && i % 2 == 1) || i == 0) {
                numberSellDays[l] += 31;
            }
            if (((i < 6 && i % 2 == 1) || (i > 7 && i % 2 == 0)) && i != 1) {
                numberSellDays[l] += 30;
            }
            if (i == 1) {
                if (yearSell[l] % 4 == 0) {
                    numberSellDays[l] += 29;
                }
                else {
                    numberSellDays[l] += 28;
                }
            }
        }
        for (i = 0; i < yearSellIndex[l]; i++) {
            if (i % 4 == 0) {
                numberSellDays[l] += 366;
            }
            else {
                numberSellDays[l] += 365;
            }
        }
        daysToSell[l] = numberSellDays[l] - numberBuyDays[l];
        itemNumber[l] = document.itemEdit.itemNumber.value;
        highestBid[l] = document.itemEdit.highestBid.value;
        if(q!=-1)
            images[l] = "iresell.JPG";
        if (itemNumber[l] != "" && q == -1) {
            endDateSplit = endTimes[l].split("T");
            endDate = endDateSplit[0].split("-");
            yearEnd[l] = endDate[0];
            monthEnd[l] = endDate[1];
            if (monthEnd[l] == 1)
                monthEnd[l] = "January";
            if (monthEnd[l] == 2)
                monthEnd[l] = "February";
            if (monthEnd[l] == 3)
                monthEnd[l] = "March";
            if (monthEnd[l] == 4)
                monthEnd[l] = "April";
            if (monthEnd[l] == 5)
                monthEnd[l] = "May";
            if (monthEnd[l] == 6)
                monthEnd[l] = "June";
            if (monthEnd[l] == 7)
                monthEnd[l] = "July";
            if (monthEnd[l] == 8)
                monthEnd[l] = "August";
            if (monthEnd[l] == 9)
                monthEnd[l] = "September";
            if (monthEnd[l] == 10)
                monthEnd[l] = "October";
            if (monthEnd[l] == 11)
                monthEnd[l] = "November";
            if (monthEnd[l] == 12)
                monthEnd[l] = "December";

            dayEnd[l] = endDate[2];

            endTimesSplit = endDateSplit[1].split(".");
            endTime = endTimesSplit[0].split(":");
            hourEnd[l] = endTime[0];
            if (hourEnd[l] < 12) {
                morningEnd[l] = "AM";
            }
            else {
                morningEnd[l] = "PM";
                if (hourEnd[l] != 0 || hourEnd[l] != 12) {
                    hourEnd[l] = hourEnd[l] - 12;
                }
                else {
                    if (hourEnd[l] == 0) {
                        hourEnd[l] = 12;
                    }
                }
            }
            minuteEnd[l] = endTime[0];
        }

        if (itemNumber[l] != ""&&q!=-1) {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    ebayString = xmlhttp.responseText.split("~");
                    endTimes[l] = ebayString[2];
                    highestBid[l] = ebayString[0];
                    images[l] = ebayString[1];
                    priceSold[l] = ebayString[0];
                    endDateSplit = endTimes[l].split("T");
                    endDate = endDateSplit[0].split("-");
                    yearEnd[l] = endDate[0];
                    monthEnd[l] = endDate[1];
                    if (monthEnd[l] == 1)
                        monthEnd[l] = "January";
                    if (monthEnd[l] == 2)
                        monthEnd[l] = "February";
                    if (monthEnd[l] == 3)
                        monthEnd[l] = "March";
                    if (monthEnd[l] == 4)
                        monthEnd[l] = "April";
                    if (monthEnd[l] == 5)
                        monthEnd[l] = "May";
                    if (monthEnd[l] == 6)
                        monthEnd[l] = "June";
                    if (monthEnd[l] == 7)
                        monthEnd[l] = "July";
                    if (monthEnd[l] == 8)
                        monthEnd[l] = "August";
                    if (monthEnd[l] == 9)
                        monthEnd[l] = "September";
                    if (monthEnd[l] == 10)
                        monthEnd[l] = "October";
                    if (monthEnd[l] == 11)
                        monthEnd[l] = "November";
                    if (monthEnd[l] == 12)
                        monthEnd[l] = "December";

                    dayEnd[l] = endDate[2];

                    endTimesSplit = endDateSplit[1].split(".");
                    endTime = endTimesSplit[0].split(":");
                    hourEnd[l] = endTime[0];
                    if (hourEnd[l] < 12) {
                        morningEnd[l] = "AM";
                    }
                    else {
                        morningEnd[l] = "PM";
                        if (hourEnd[l] != 0 || hourEnd[l] != 12) {
                            hourEnd[l] = hourEnd[l] - 12;
                        }
                        else {
                            if (hourEnd[l] == 0) {
                                hourEnd[l] = 12;
                            }
                        }
                    }
                    minuteEnd[l] = endTime[0];

                    profits[l] = (Number(priceSold[l]) - Number(priceBuy[l])) + "";
                    percentReturn[l] = 10000 * profits[l] / priceBuy[l];
                    percentReturn[l] += "";
                    profits[l] = Number(profits[l]) * Number(quantity[l]) + "";
                    temp = percentReturn[l].split(".");
                    percentReturn[l] = temp[0] / 100;

                    if (q != -1) {
                        if (newItem == "true") {
                            newXML(l);
                        }
                        else {
                            editXML(l);
                        }
                    }
                    for (i = 0; i < descriptions.length; i++) {
                        if (colorIndex == 0) {
                            color = "#E8E8E8";
                            colorIndex = 1;
                        }
                        else {
                            color = "#66CCFF";
                            colorIndex = 0;
                        }

                        htmlString += "<tr>";
                        htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
                        htmlString += "<td bgcolor=" + color + "><img src=" + images[i] + " width=70></td>";
                        htmlString += "<td bgcolor=" + color + ">" + names[i] + "</td>";
                        htmlString += "<td bgcolor=" + color + ">$"+toMoney(priceBuy[i])+"/$" + toMoney(priceSold[i]) + "</td>";
                        htmlString += "<td bgcolor=" + color + ">";
                        if (profits[i] >= 0) {
                            htmlString += "$" + toMoney(profits[i]) + "</td>";
                        }
                        else {
                            tempProfit = profits[i] * (-1);
                            htmlString += "-$" + tempProfit + "</td>";
                        }
                        htmlString += "<td bgcolor=" + color + ">" + percentReturn[i] + "%</td>";
                        htmlString += "<td bgcolor=" + color + "><button onclick=setWizard(" + i + ")>Edit</button></td>";
                        htmlString += "</tr>";
                    }

                    htmlString += "</tbody></table>";
                    items.innerHTML = htmlString;
                    if (q != -1) {
                        window.location.href = "#page2";
                    }
                }
            }
            window.location.href = "#loading";
            xmlhttp.open("GET", "index.php?action=ebay&inu=" + itemNumber[l], true);
            xmlhttp.send();
        }
        else {
            profits[l] = (Number(priceSold[l]) - Number(priceBuy[l])) + "";
            percentReturn[l] = 10000 * profits[l] / priceBuy[l];
            profits[l]=Number(profits[l])*Number(quantity[l]) + "";
            percentReturn[l] += "";
            temp = percentReturn[l].split(".");
            percentReturn[l] = temp[0] / 100;

            if (q != -1) {
                if (newItem == "true") {
                    newXML(l);
                }
                else {
                    editXML(l);
                }
            }
            for (i = 0; i < descriptions.length; i++) {
                if (colorIndex == 0) {
                    color = "#E8E8E8";
                    colorIndex = 1;
                }
                else {
                    color = "#66CCFF";
                    colorIndex = 0;
                }
                htmlString += "<tr>";
                htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
                htmlString += "<td bgcolor=" + color + "><img src=" + images[i] + " width=70></td>";
                htmlString += "<td bgcolor=" + color + ">" + names[i] + "</td>";
                htmlString += "<td bgcolor=" + color + ">$"+toMoney(priceBuy[i])+"/$" + toMoney(priceSold[i]) + "</td>";
                htmlString += "<td bgcolor=" + color + ">";
                if (profits[i] >= 0) {
                    htmlString += "$" + toMoney(profits[i]) + "</td>";
                }
                else {
                    tempProfit = profits[i] * (-1);
                    htmlString += "-$" + tempProfit + "</td>";
                }
                htmlString += "<td bgcolor=" + color + ">" + percentReturn[i] + "%</td>";
                htmlString += "<td bgcolor=" + color + "><button onclick=setWizard(" + i + ")>Edit</button></td>";
                htmlString += "</tr>";
            }

            htmlString += "</tbody></table>";
            items.innerHTML = htmlString;
            if (q != -1) {
                window.location.href = "#page2";
            }
        }
    }

    function removeItem(j) {
        name = names[j];
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
            }
        }
        xmlhttp.open("GET", "index.php?action=remove&un=" + username + "&in=" + name);
        xmlhttp.send();

        names.splice(j, 1);
        quantity.splice(j, 1);
        descriptions.splice(j, 1);
        priceBuy.splice(j, 1);
        monthBuy.splice(j, 1);
        monthBuyIndex.splice(j, 1);
        numberBuyDays.splice(j, 1);
        yearBuy.splice(j, 1);
        yearBuyIndex.splice(j, 1);
        dayBuy.splice(j, 1);
        dayBuyIndex.splice(j, 1);
        priceSold.splice(j, 1);
        monthSell.splice(j, 1);
        monthSellIndex.splice(j, 1);
        yearSell.splice(j, 1);
        yearSellIndex.splice(j, 1);
        daySell.splice(j, 1);
        daySellIndex.splice(j, 1);
        numberSellDays.splice(j, 1);
        profits.splice(j, 1);
        percentReturn.splice(j, 1);
        daysToSell.splice(j, 1);
        itemNumber.splice(j, 1);
        highestBid.splice(j, 1);
        endTimes.splice(j, 1);
        images.splice(j, 1);
        index--;

        htmlString = "<table width=100% border=1 cellpadding=10>" +
                            "<thead>" +
                            "<tr>" +
                                "<th colspan=2></th>" +
                                "<th>Item Name</th>" +
                                "<th>Item Description</th>" +
                                "<th>Purchase Price</th>" +
                                "<th>Purchase Date</th>" +
                                "<th>Sell Price</th>" +
                                "<th>Sell Date</th>" +
                                "<th>Profit</th>" +
                                "<th>Percent Return</th>" +
                                "<th>Days to Sell</th>" +
                                "</tr>" +
                                "</thead>" +
                                "<tbody>";
        for (i = 0; i < descriptions.length; i++) {
            if (colorIndex == 0) {
                color = "#E8E8E8";
                colorIndex = 1;
            }
            else {
                color = "#66CCFF";
                colorIndex = 0;
            }
            htmlString += "<tr>";
            htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
            htmlString += "<td bgcolor=" + color + "><img src="+images[i]+" width=70></td>";
            htmlString += "<td bgcolor=" + color + ">" + names[i] + "</td>";
            htmlString += "<td bgcolor=" + color + ">" + descriptions[i] + "</td>";
            htmlString += "<td bgcolor=" + color + ">$" + toMoney(priceBuy[i]) + "</td>";
            htmlString += "<td bgcolor=" + color + ">" + monthBuy[i] + " " + dayBuy[i] + ", " + yearBuy[i] + "</td>";
            htmlString += "<td bgcolor=" + color + ">$" + toMoney(priceSold[i]) + "</td>";
            htmlString += "<td bgcolor=" + color + ">" + monthSell[i] + " " + daySell[i] + ", " + yearSell[i] + "</td>";
            htmlString += "<td bgcolor=" + color + ">";
            if (profits[i] >= 0) {
                htmlString += "$" + toMoney(profits[i]) + "</td>";
            }
            else {
                tempProfit = profits[i] * (-1);
                htmlString += "-$" + tempProfit + "</td>";
            }
            htmlString += "<td bgcolor=" + color + ">" + percentReturn[i] + "%</td>";
            htmlString += "<td bgcolor=" + color + ">" + daysToSell[i] + "</td>";
            htmlString += "<td bgcolor=" + color + "><button onclick=setWizard(" + i + ")>Edit</button></td>";
            htmlString += "</tr>";
        }
        if (percentReturn.length == 0) {
            htmlString = "<table width=100% border=1 cellpadding=10>" +
                "<thead>" +
                "<tr>" +
                    "<th colspan=2></th>" +
                    "<th>Item Name</th>" +
                    "<th>Item Description</th>" +
                    "<th>Purchase Price</th>" +
                    "<th>Date Purchased</th>" +
                    "<th>Price Sold</th>" +
                    "<th>Date Sold</th>" +
                    "<th>Profit</th>" +
                    "<th>Percent Return</th>" +
                "</tr>" +
                "<tr height=50>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td></td>" +
                "</tr>" +
                "</thead>" +
            "</table>";
        }
        htmlString += "</table>";
        items.innerHTML = htmlString;
    }

    function calculateItem() {
        if (document.individualItem.itemCost.value != "") {
            if (document.individualItem.itemSell.value != "") {
                itemCostCalc = document.individualItem.itemCost.value;
                itemSellCalc = document.individualItem.itemSell.value;
                itemProfitCalc = (100 * (itemSellCalc - itemCostCalc)) + "";
                profitTemp = itemProfitCalc.split(".");
                itemProfitCalc = profitTemp[0] / 100;
                itemReturnCalc = (10000 * itemProfitCalc / itemCostCalc) + "";
                returnTemp = itemReturnCalc.split(".");
                itemReturnCalc = returnTemp[0] / 100;
                document.individualItem.itemPercentReturn.value = itemReturnCalc;
                document.individualItem.itemProfit.value = itemProfitCalc;
            }
            else {
                if (document.individualItem.itemProfit.value != "") {
                    itemCostCalc = Number(document.individualItem.itemCost.value);
                    itemProfitCalc = Number(document.individualItem.itemProfit.value);
                    itemSellCalc = itemCostCalc + itemProfitCalc;
                    itemReturnCalc = (10000 * itemProfitCalc / itemCostCalc) + "";
                    returnTemp = itemReturnCalc.split(".");
                    itemReturnCalc = returnTemp / 100;
                    document.individualItem.itemSell.value = itemSellCalc;
                    document.individualItem.itemPercentReturn.value = itemReturnCalc;
                }
                else {
                    if (document.individualItem.itemPercentReturn.value != "") {
                        itemCostCalc = Number(document.individualItem.itemCost.value);
                        itemReturnCalc = Number(document.individualItem.itemPercentReturn.value);
                        itemProfitCalc = itemCostCalc * itemReturnCalc + "";
                        profitTemp = itemProfitCalc.split(".");
                        itemProfitCalc = Number(profitTemp[0] / 100);
                        itemSellCalc = itemCostCalc + itemProfitCalc;
                        document.individualItem.itemSell.value = itemSellCalc;
                        document.individualItem.itemProfit.value = itemProfitCalc;
                    }
                    else {
                        alert("Must enter a value for either:\n\n" +
                        "Projected Sell Price\n\n" +
                        "Projected Profit\n\n" +
                        "Projected Percent Return");
                    }
                }
            }
        }
        else {
            if (document.individualItem.itemSell.value != "") {
                if (document.individualItem.itemProfit.value != "") {
                    itemSellCalc = Number(document.individualItem.itemSell.value);
                    itemProfitCalc = Number(document.individualItem.itemProfit.value);
                    itemBuyCalc = Number(itemSellCalc - itemProfitCalc);
                    itemReturnCalc = 10000 * itemProfitCalc / itemBuyCalc + "";
                    returnTemp = itemReturnCalc.split(".");
                    itemReturnCalc = returnTemp[0] / 100;
                    document.individualItem.itemCost.value = itemBuyCalc;
                    document.individualItem.itemPercentReturn.value = itemReturnCalc;
                }
                else {
                    if (document.individualItem.itemPercentReturn.value != "") {
                        itemSellCalc = Number(document.individualItem.itemSell.value);
                        itemReturnCalc = Number(document.individualItem.itemPercentReturn.value);
                        itemBuyCalc = 100 * itemSellCalc / (1 + itemReturnCalc / 100) + "";
                        itemBuyTemp = itemBuyCalc.split(".");
                        itemBuyCalc = itemBuyTemp[0] / 100;
                        itemProfitCalc = itemSellCalc - itemBuyCalc;
                        document.individualItem.itemCost.value = itemBuyCalc;
                        document.individualItem.itemProfit.value = itemProfitCalc;
                    }
                    else {
                        alert("Must enter a value for either:\n\n" +
                        "Item Cost\n\n" +
                        "Projected Profit\n\n" +
                        "Projected Percent Return");
                    }
                }
            }
            else {
                alert("Must enter a value for either:\n\n" +
                    "Item Cost\n\n" +
                    "Projected Sell Price");
            }
        }
    }

    function resetCalculateItem(){
        document.individualItem.itemCost.value = "";
        document.individualItem.itemSell.value = "";
        document.individualItem.itemProfit.value = "";
        document.individualItem.itemPercentReturn.value = "";
    }

    function calculateStats() {

        monthRevenue = document.revenues.revenueMonth.selectedIndex;
        yearRevenue = document.revenues.revenueYear.selectedIndex;
        
        totalProfit = 0;
        totalPercentReturn = 0;
        totalBuy = 0;
        totalSell = 0;

        averageProfit = 0;
        averagePercentReturn = 0;
        averageBuy = 0;
        averageSell = 0;

        minBuy = 0;
        maxBuy = 0;

        minProfit = 0;
        maxProfit = 0;

        minPercentReturn = 0;
        maxPercentReturn = 0;

        minSell = 0;
        maxSell = 0;

        averageNumberBuy = 0;
        averageNumberSell = 0;

        for (j = 0; j < descriptions.length; j++) {
            if (yearSellIndex[j] == yearRevenue && monthSellIndex[j] == monthRevenue) {
                minProfit = Number(profits[j]);
                maxProfit = Number(profits[j]);

                minPercentReturn = Number(percentReturn[j]);
                maxPercentReturn = Number(percentReturn[j]);

                minSell = Number(priceSold[j]);
                maxSell = Number(priceSold[j]);

                averageNumberSell++;
            }
            if (yearBuyIndex[j] == yearRevenue && monthBuyIndex[j] == monthRevenue) {
                minBuy = Number(priceBuy[j]);
                maxBuy = Number(priceBuy[j]);

                averageNumberBuy++;
            }
        }
        
        if (averageNumberSell <= 0)
            averageNumberSell = 1;
        if (averageNumberBuy <= 0)
            averageNumberBuy = 1;

        for (i = 0; i < descriptions.length; i++) {            
            if (monthBuyIndex[i] == monthRevenue && yearBuyIndex[i] == yearRevenue) {
                totalBuy += Number(priceBuy[i]);
                if (priceBuy[i] < minBuy) {
                    minBuy = priceBuy[i];
                }
                if (priceBuy[i] > maxBuy) {
                    maxBuy = priceBuy[i];
                }
            }
            if (monthSellIndex[i] == monthRevenue && yearSellIndex[i] == yearRevenue) {
                totalProfit += Number(profits[i]);
                totalPercentReturn += Number(percentReturn[i]);
                totalSell += Number(priceSold[i]);

                if (profits[i] < minProfit) {
                    minProfit = profits[i];
                }
                if (profits[i] > maxProfit) {
                    maxProfit = profits[i];
                }

                if (percentReturn[i] < minPercentReturn) {
                    minPercentReturn = percentReturn[i];
                }
                if (percentReturn[i] > maxPercentReturn) {
                    maxPercentReturn = percentReturn[i];
                }

                if (priceSold[i] < minSell) {
                    minSell = priceSold[i];
                }
                if (priceSold[i] > maxSell) {
                    maxSell = priceSold[i];
                }
            }
        }

        averageBuy = totalBuy / averageNumberBuy;

        averageProfit = totalProfit / averageNumberSell + "";
        averagePercentReturn = totalPercentReturn / averageNumberSell;
        averageSell = totalSell / averageNumberSell;

        statistics.innerHTML = "<table>" +
                                "<tr><th>Profits</th></tr>" +
                                "<tr><td>Total Profit:</td><td>$" + toMoney(totalProfit + "") + "</td></tr>" +
                                "<tr><td>Average Profit:</td><td>$" + toMoney(averageProfit + "") + "</td></tr>" +
                                "<tr><td>Max Profit:</td><td>$" + toMoney(maxProfit + "") + "</td></tr>" +
                                "<tr><td>Min Profit:</td><td>$" + toMoney(minProfit + "") + "</td></tr>" +
                                "<tr height=20></tr>" +
                                "<tr><th>Percent Return</th></tr>" +
                                "<tr><td>Average Percent Return:</td><td>" + toMoney(averagePercentReturn + "") + "%</td></tr>" +
                                "<tr><td>Max Percent Return:</td><td>" + toMoney(maxPercentReturn + "") + "%</td></tr>" +
                                "<tr><td>Min Percent Return:</td><td>" + toMoney(minPercentReturn + "") + "%</td></tr>" +
                                "<tr height=20></tr>" +
                                "<tr><th>Item Purchases</th></tr>" +
                                "<tr><td>Total Purchases:</td><td>$" + toMoney(totalBuy + "") + "</td></tr>" +
                                "<tr><td>Average Purchase:</td><td>$" + toMoney(averageBuy + "") + "</td></tr>" +
                                "<tr><td>Max Purchase:</td><td>$" + toMoney(maxBuy + "") + "</td></tr>" +
                                "<tr><td>Min Purchase:</td><td>$" + toMoney(minBuy + "") + "</td></tr>" +
                                "<tr height=20></tr>" +
                                "<tr><th>Revenue</th></tr>" +
                                "<tr><td>Total Revenue:</td><td>$" + toMoney(totalSell + "") + "</td></tr>" +
                                "<tr><td>Average Revenue/Sale:</td><td>$" + toMoney(averageSell + "") + "</td></tr>" +
                                "<tr><td>Max Revenue:</td><td>$" + toMoney(maxSell + "") + "</td></tr>" +
                                "<tr><td>Min Revenue:</td><td>$" + toMoney(minSell + "") + "</td></tr>" +
                                "<tr></tr>" +
                             "</table>";
    }

    function toMoney(value) {
        moneyString = "";
        if (value != "") {
            if (value > 1 || value < -1) {
                valueMoney = value.split(".");
                moneyString = valueMoney[0];
                if (valueMoney.length > 1) {
                    cent = valueMoney[1].split("");
                    moneyString += "." + cent[0];
                    if (cent.length > 1) {
                        moneyString += cent[1]
                    }
                    else {
                        moneyString += "0";
                    }
                }
                else {
                    moneyString += ".00";
                }
            }
            else {
                valueMoney = value.split(".");
                if (valueMoney.length > 1) {
                    cent = valueMoney[1].split("");
                    moneyString = "0." + cent[0];
                    if (cent.length > 1) {
                        moneyString += cent[1]
                    }
                    else {
                        moneyString += "0";
                    }
                }
                else {
                    moneyString = "0." + valueMoney[0];
                }
            }
        }
        else {
            moneyString = "0.00";
        }
        moneyStringTemp = moneyString.split("");
        if (moneyStringTemp[0] == "0") {
            moneyString = "";
            for (j = 1; j < moneyStringTemp.length; j++) {
                moneyString += moneyStringTemp[j];
            }
        }
        return moneyString;
    }

    function contact() {
        subject = document.email.emailSubject.value;
        message = document.email.emailMessage.value;

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.responseText == "true") {
                    alert("Your email has been successfully sent");
                    document.email.emailSubject.value = "";
                    document.email.emailMessage.value = "";
                    window.location.href = "#page2";
                }
                else {
                    alert(xmlhttp.responseText);
                }
            }
        };
        xmlhttp.open("GET", "index.php?action=email&un=" + username + "&su=" + subject + "&m=" + message, true);
        xmlhttp.send();
    }
    
    function newAccount() {
        username = document.account.newUserName.value;
        password = document.account.newPassword.value;
        repeatPassword = document.account.repeatPassword.value;
        userEmail = document.account.userEmail.value;

        document.account.newUserName.value = "";
        document.account.newPassword.value = "";
        document.account.repeatPassword.value = "";
        document.account.userEmail.value = "";
        document.loginScreen.username.value = "";
        document.loginScreen.password.value = "";

        accountValidation = "false";
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.responseText == "true") {
                    htmlString = "<table width=100% border=1 cellpadding=10>" +
                                    "<thead>" +
                                        "<tr>" +
                                            "<th colspan=2></th>" +
                                            "<th>Item Name</th>" +
                                            "<th>Item Description</th>" +
                                            "<th>Purchase Price</th>" +
                                            "<th>Date Purchased</th>" +
                                            "<th>Price Sold</th>" +
                                            "<th>Date Sold</th>" +
                                            "<th>Profit</th>" +
                                            "<th>Percent Return</th>" +
                                        "</tr>" +
                                        "<tr height=50>" +
                                            "<td colspan=2></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                            "<td></td>" +
                                        "</tr>" +
                                    "</thead>" +
                                "</table>";
                    items.innerHTML = htmlString;
                    window.location.href = "#page2";
                }
                else {
                    alert(xmlhttp.responseText);
                    window.location.href = "#page18";
                }
            }
        };
        xmlhttp.open("GET", "index.php?action=newAccount&un=" + username + "&pw=" + password + "&rpw=" + repeatPassword + "&ue=" + userEmail, true);
        xmlhttp.send();
    }

    function loginWindow() {
        username = document.loginScreen.username.value;
        password = document.loginScreen.password.value;

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                xmlResponse = xmlhttp.responseText.split("~");
                if (xmlResponse.length > 1 || xmlhttp.responseText=="") {
                    readXML(xmlhttp.responseText);
                    window.location.href = "#page2"
                }
                else {
                    alert(xmlhttp.responseText);
                    window.location.href = "#page13";
                }
            }
        }
        window.location.href = "#loading";

        document.loginScreen.username.value = "";
        document.loginScreen.password.value = "";

        xmlhttp.open("GET", "index.php?action=login&un=" + username + "&pw=" + password, true);
        xmlhttp.send();
    }

    function readXML(stringXML) {
        xmlString = stringXML.split("~");
        j = 0;
        k = 0;
        for (i = 0; i < xmlString.length; i++) {
            if (j == 0)
                names[k] = xmlString[i];
            if (j == 1)
                quantity[k] = xmlString[i];
            if (j == 2)
                descriptions[k] = xmlString[i];
            if (j == 3)
                priceBuy[k] = xmlString[i];
            if (j == 4)
                monthBuy[k] = xmlString[i];
            if (j == 5)
                monthBuyIndex[k] = xmlString[i];
            if (j == 6)
                dayBuy[k] = xmlString[i];
            if (j == 7)
                dayBuyIndex[k] = xmlString[i];
            if (j == 8)
                yearBuy[k] = xmlString[i];
            if (j == 9)
                yearBuyIndex[k] = xmlString[i];
            if (j == 10)
                priceSold[k] = xmlString[i];
            if (j == 11)
                monthSell[k] = xmlString[i];
            if (j == 12)
                monthSellIndex[k] = xmlString[i];
            if (j == 13)
                daySell[k] = xmlString[i];
            if (j == 14)
                daySellIndex[k] = xmlString[i];
            if (j == 15)
                yearSell[k] = xmlString[i];
            if (j == 16)
                yearSellIndex[k] = xmlString[i];
            if (j == 17)
                numberBuyDays[k] = xmlString[i];
            if (j == 18)
                numberSellDays[k] = xmlString[i];
            if (j == 19)
                profits[k] = xmlString[i];
            if (j == 20)
                percentReturn[k] = xmlString[i];
            if (j == 21)
                daysToSell[k] = xmlString[i];
            if (j == 22)
                itemNumber[k] = xmlString[i];
            if (j == 23)
                highestBid[k] = xmlString[i];
            if (j == 24)
                images[k] = xmlString[i];
            if (j == 25)
                endTimes[k] = xmlString[i];
            j++;
            if (j > 25) {
                j = 0;
                k++;
            }
        }

        for (x = 0; x < k; x++) {
            setWizard(x);
            editItem(x, -1);
        }
    }

    function newXML(l) {
        name = names[l];
        quantitys=quantity[l];
        description = descriptions[l];
        priceBought = priceBuy[l];
        monthBought = monthBuy[l];
        monthBoughtIndex = monthBuyIndex[l];
        numberBoughtDays = numberBuyDays[l];
        yearBought = yearBuy[l];
        yearBoughtIndex = yearBuyIndex[l];
        dayBought = dayBuy[l];
        dayBoughtIndex = dayBuyIndex[l];
        priceSell = priceSold[l];
        monthSold = monthSell[l];
        monthSoldIndex = monthSellIndex[l];
        yearSold = yearSell[l];
        yearSoldIndex = yearSellIndex[l];
        daySold = daySell[l];
        daySoldIndex = daySellIndex[l];
        numberSoldDays = numberSellDays[l];
        daysToSold = daysToSell[l];
        profit = profits[l];
        percentReturns = percentReturn[l];
        itemNumbers = itemNumber[l];
        highestBids = highestBid[l];

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
            }
        }
        xmlhttp.open("GET", "index.php?action=load&un=" + username + "&in=" + name + "&qu="+quantitys+"&id=" + description + "&pb=" + priceBought + "&mb=" + monthBought + "&mbi=" +
                                monthBoughtIndex + "&db=" + dayBought + "&dbi=" + dayBoughtIndex + "&yb=" + yearBought + "&ybi=" + yearBoughtIndex + "&ps=" + priceSell + "&ms=" + monthSold +
                                "&msi=" + monthSoldIndex + "&ds=" + daySold + "&dsi=" + daySoldIndex + "&ys=" + yearSold + "&ysi=" + yearSoldIndex + "&nbd=" + numberBoughtDays +
                                "&nsd=" + numberSoldDays + "&p=" + profit + "&pr=" + percentReturns + "&dts=" + daysToSold + "&inu=" + itemNumbers + "&hb="  + highestBids, true);
        xmlhttp.send();
    }

    function editXML(c) {
        name = names[c];
        quantitys = quantity[c];
        description = descriptions[c];
        priceBought = priceBuy[c];
        monthBought = monthBuy[c];
        monthBoughtIndex = monthBuyIndex[c];
        numberBoughtDays = numberBuyDays[c];
        yearBought = yearBuy[c];
        yearBoughtIndex = yearBuyIndex[c];
        dayBought = dayBuy[c];
        dayBoughtIndex = dayBuyIndex[c];
        priceSell = priceSold[c];
        monthSold = monthSell[c];
        monthSoldIndex = monthSellIndex[c];
        yearSold = yearSell[c];
        yearSoldIndex = yearSellIndex[c];
        daySold = daySell[c];
        daySoldIndex = daySell[c];
        numberSoldDays = numberSellDays[c];
        daysToSold = daysToSell[c];
        profit = profits[c];
        percentReturns = percentReturn[c];
        itemNumbers = itemNumber[c];
        highestBids = highestBid[c];
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
            }
        };
        xmlhttp.open("GET", "index.php?action=edit&on=" + originalName + "&un=" + username + "&in=" + name + "&qu="+quantitys+"&id=" + description + "&pb=" + priceBought + "&mb=" + monthBought + "&mbi=" +
                                monthBoughtIndex + "&db=" + dayBought + "&dbi=" + dayBoughtIndex + "&yb=" + yearBought + "&ybi=" + yearBoughtIndex + "&ps=" + priceSell + "&ms=" + monthSold +
                                "&msi=" + monthSoldIndex + "&ds=" + daySold + "&dsi=" + daySoldIndex + "&ys=" + yearSold + "&ysi=" + yearSoldIndex + "&nbd=" + numberBoughtDays +
                                "&nsd=" + numberSoldDays + "&p=" + profit + "&pr=" + percentReturns + "&dts=" + daysToSold + "&inu=" + itemNumbers + "&hb=" + highestBids, true);
        xmlhttp.send();
    }
    function exportEbay(){
        totalPrice = 0;
        totalItems = 0;
        totalAverageDisplay = 0;
        itemSearch = document.appraise.searchTerm.value;

        overallAverage.innerHTML = "loading...";
        ebayPrice.innerHTML = "loading...";
        googleShopping.innerHTML = "loading...";
 
        //Ebay
        xmlhttpEbay = new XMLHttpRequest();
        xmlhttpEbay.onreadystatechange = function () {
            if (xmlhttpEbay.readyState == 4) {
                ebayTotal = 0;
                ebayItems = xmlhttpEbay.responseText.split("~&");

                for (j = 0; j < 3; j++) {
                    ebayPriceDetails = ebayItems[j].split("^&");
                    ebayTotal += Number(ebayPriceDetails[2]);
                    totalPrice += Number(ebayPriceDetails[2]);
                    if (totalPrice > 0)
                        totalItems++;
                }

                ebayAverage = ebayTotal / 3;
                ebayAverage += "";
                ebayAverageString = ebayAverage.split(".");
                ebayAverageDisplay = "$" + ebayAverageString[0] + ".";
                ebayAverageCents = ebayAverageString[1].split("");
                ebayAverageDisplay += ebayAverageCents[0] + ebayAverageCents[1];

                totalAverage = totalPrice / totalItems;
                totalAverage += "";
                totalAverageString = totalAverage.split(".");
                totalAverageDisplay = "$" + totalAverageString[0] + ".";
                totalAverageCents = totalAverageString[1].split("");
                totalAverageDisplay += totalAverageCents[0] + totalAverageCents[1];

                ebayTable = "<table cellspacing=20 cellpadding=20><tr><th colspan=3><big><u>Ebay average=" + ebayAverageDisplay + "</u></big></th></tr><tr>";
                for (i = 0; i < 3; i++) {
                    ebayDetails = ebayItems[i].split("^&");
                    ebayTable += "<tr><td>";
                    ebayTable += "<table><tr><td width=200>" + ebayDetails[0] + "</td></tr>";
                    ebayTable += "<tr><td><img src=" + ebayDetails[1] + " width=200></td></tr>";
                    ebayTable += "<tr><td>Price: $" + ebayDetails[2] + "</td></tr></table>";
                    ebayTable += "</td></tr>";
                }
                ebayTable += "</tr></table>";
                ebayPrice.innerHTML = ebayTable;
                overallAverage.innerHTML = "<big><b>Market Price: " + totalAverageDisplay+"</b></big>";
            }
        };
        xmlhttpEbay.open("GET", "index.php?action=ebayPrice&search="+itemSearch, true);
        xmlhttpEbay.send();

        //Google shopping
        xmlhttpGoogle = new XMLHttpRequest();
        xmlhttpGoogle.onreadystatechange = function () {
            if (xmlhttpGoogle.readyState == 4) {
                googleTotal = 0;
                obj = eval("(" + xmlhttpGoogle.responseText + ")");

                for (k = 0; k < 3; k++) {
                    googleTotal += Number(obj.items[k].product.inventories[0].price);
                    totalPrice += Number(obj.items[k].product.inventories[0].price);
                    if (totalPrice > 0)
                        totalItems++;
                }

                googleAverage = googleTotal / 3;
                googleAverage += "";
                googleAverageString = googleAverage.split(".");
                googleAverageDisplay = "$" + googleAverageString[0] + ".";
                googleAverageCents = googleAverageString[1].split("");
                googleAverageDisplay += googleAverageCents[0] + googleAverageCents[1];

                totalAverage = totalPrice / totalItems;
                totalAverage += "";
                totalAverageString = totalAverage.split(".");
                totalAverageDisplay = "$" + totalAverageString[0] + ".";
                totalAverageCents = totalAverageString[1].split("");
                totalAverageDisplay += totalAverageCents[0] + totalAverageCents[1];

                googleOutput = "<table cellpadding=20 cellspacing=20><tr><th colspan=3><big><u>Google Shopping average: " + googleAverageDisplay + "</u></big></th></tr><tr>";

                for (l = 0; l < 3; l++) {
                    itemTitle = obj.items[l].product.title;
                    itemImage = obj.items[l].product.images[0].link;
                    itemPrice = obj.items[l].product.inventories[0].price;
                    googleOutput += "<tr><td><table><tr><td width=200>" + itemTitle + "</td></tr>";
                    googleOutput += "<tr><td><img src=" + itemImage + " width=200></td></tr>";
                    googleOutput += "<tr><td width=100>Price: $" + itemPrice + "</td></tr></table></td></tr>";
                }
                googleOutput += "</tr></table>";
                googleShopping.innerHTML = googleOutput;
                overallAverage.innerHTML = "Market Price: " + totalAverageDisplay;
            }
        };
        qsplit = itemSearch;
        while(qsplit.indexOf(" ")!=-1){
            qsplit=qsplit.replace(" ", "+");
        }
        xmlhttpGoogle.open("GET", "https://www.googleapis.com/shopping/search/v1/public/products?key=AIzaSyCnG99cUzzeeRewOH286CDIpR5qcHa4LRE&country=US&q="+qsplit+"&alt=json", true);
        xmlhttpGoogle.send();
    }