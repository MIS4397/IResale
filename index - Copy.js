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

    username = "";
    password = "";

    originalName = "";

    function createItemWizard(p, q) {
        itemEditor.innerHTML = "<form name='itemEdit'>" +
        "<table border='0'>" +
            "<tr height='20'></tr>" +
            "<tr>" +
                "<td colspan=3><input type='text' name='name' size='15'></td>" +
                "<td align='right'>Quantity:</td>" +
                "<td><input type='text' name='quantity' size='1'></td>" +
            "</tr>" +
            "<tr height='130'>" +
                "<td><img src=" + images[p] + " width=125></div></td>" +
                "<td colspan='4' height='130'><textarea style='resize:none' rows='5' cols='10' name='description'></textarea></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Purchase Price:</td>" +
                "<td><input type='text' name='purchasePrice' size='7'></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Purchase Date:</td>" +
                "<td><select name='monthBuy'><option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option>" +
                        "<option>August</option><option>September</option><option>October</option><option>November</option><option>December</option>" +
                    "</select></td>" +
                "<td><select name='dayBuy'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>" +
                        "<option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option>" +
                        "<option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>" +
                        "<option>30</option><option>31</option>" +
                    "</select></td>" +
                "<td><select name='yearBuy'><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option>" +
                        "<option>2016</option><option>2017</option>" +
                    "</select></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Sell Price:</td>" +
                "<td><input type='text' name='sellPrice' size='7'></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Sell Date:</td>" +
                "<td><select name='monthSell'><option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option>" +
                        "<option>August</option><option>September</option><option>October</option><option>November</option><option>December</option>" +
                    "</select></td>" +
                "<td><select name='daySell'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>" +
                        "<option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option>" +
                        "<option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select></td>" +
                "<td><select name='yearSell'><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option>" +
                        "<option>2016</option><option>2017</option>" +
                    "</select></td>" +
            "</tr>" +
            "<tr height='30'></tr>" +
            "<tr height='50'>" +
                "<td colspan=5 bgcolor=yellow align=center><font size=8 color=black>Ebay</font></td>" +
            "</tr>" +
            "<tr height='30'></tr>" +
            "<tr>" +
                "<td>Item Number:</td>" +
                "<td><input type=text size=4 name=itemNumber></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Start Bid:</td>" +
                "<td><input type=text size=4 name=startBid></td>" +
            "</tr>" +

            "<tr>" +
                "<td>Highest Bid:</td>" +
                "<td><input type=text size=4 name=highestBid></td>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
                "<td>Auction End Date:</td>" +
                "<td>" + monthEnd[p] + " " + dayEnd[p] + ", " + yearEnd[p] + "</td>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
                "<td>Auction End Time:</td>" +
                "<td>" + hourEnd[p] + ":" + minuteEnd[p] + " " + morningEnd[p] + "</td>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
                "<td>Reserve:</td>" +
                "<td><input type=text size=4 name=reserve></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Buy It Now:</td>" +
                "<td><input type=text size=4 name=buyItNow></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Shipping/Handling:</td>" +
                "<td><input type=text size=4 name=shipping></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Length:</td>" +
                "<td><input type=text size=2 name=length></td>" +
                "<td><select name=lengthUnits><option>inches</option><option>cm</option></select></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Width:</td>" +
                "<td><input type=text size=2 name=width></td>" +
                "<td><select name=widthUnits><option>inches</option><option>cm</option></select></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Height:</td>" +
                "<td><input type=text size=2 name=height></td>" +
                "<td><select name=heightUnits><option>inches</option><option>cm</option></select></td>" +
            "</tr>" +
            "<tr>" +
                "<td>Weight:</td>" +
                "<td><input type=text size=2 name=weight></td>" +
                "<td><select name=weightUnits><option>lbs</option><option>kg</option></select></td>" +
        "</tr>" +
            "<tr>" +
                "<td>" +
                    "<div id=listEbay>" +
                        "<button onclick=addToEbay()>List on Ebay</button>" +
                    "</div>" +
                "</td>" +
            "</tr>" +
        "</table>" +
        "</form>" +
        "<table border=0><tr><td><input type=button onclick=editItem(" + p + ") value=Finish></td><td></td><td><input type=button onclick=location.href='#items' value=Cancel></td></tr></table>";

        if (p == -1) {
            resetWizardOnLoad();
        }
        else {
            setWizardOnLoad(p);
        }
    }

    function resetWizardOnLoad() {
        document.itemEdit.name.value = "";
        document.itemEdit.description.value = "";
        document.itemEdit.purchasePrice.value = "";
        document.itemEdit.monthBuy.selectedIndex = 0;
        document.itemEdit.dayBuy.selectedIndex = 0;
        document.itemEdit.yearBuy.selectedIndex = 4;
        document.itemEdit.monthSell.selectedIndex = 0;
        document.itemEdit.daySell.selectedIndex = 0;
        document.itemEdit.yearSell.selectedIndex = 4;
        document.itemEdit.monthEnd.selectedIndex = 0;
        document.itemEdit.dayEnd.selectedIndex = 0;
        document.itemEdit.yearEnd.selectedIndex = 4;
        document.itemEdit.sellPrice.value = "";
        document.itemEdit.itemNumber.value = "";
        document.itemEdit.startBid.value = "";
        document.itemEdit.highestBid.value = "";
        document.itemEdit.reserve.value = "";
        document.itemEdit.buyItNow.value = "";
        document.itemEdit.shipping.value = "";
        document.itemEdit.length.value = "";
        document.itemEdit.lengthUnits.selectedIndex = 0;
        document.itemEdit.width.value = "";
        document.itemEdit.widthUnits.selectedIndex = 0;
        document.itemEdit.height.value = "";
        document.itemEdit.heightUnits.selectedIndex = 0;
        document.itemEdit.weight.value = "";
        document.itemEdit.weightUnits.selectedIndex = 0;
    }

    function setWizard(j) {
        window.location.href = "#editItems";
        createItemWizard(j, 0);
    }

    function setWizardOnLoad(k) {
        document.itemEdit.name.value = names[k];
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
        document.itemEdit.startBid.value = startBid[k];
        document.itemEdit.highestBid.value = highestBid[k];
        document.itemEdit.reserve.value = reserve[k];
        document.itemEdit.buyItNow.value = buyItNow[k];
        document.itemEdit.shipping.value = shipping[k];
        document.itemEdit.length.value = shipLength[k];
        document.itemEdit.lengthUnits.selectedIndex = shipLengthUnitsIndex[k];
        document.itemEdit.width.value = shipWidth[k];
        document.itemEdit.widthUnits.selectedIndex = shipWidthUnitsIndex[k];
        document.itemEdit.height.value = shipHeight[k];
        document.itemEdit.heightUnits.selectedIndex = shipHeightUnitsIndex[k];
        document.itemEdit.weight.value = shipWeight[k];
        document.itemEdit.weightUnits.selectedIndex = shipWeightUnitsIndex[k];
    }

    function editItem(itemNumbers) {
        if (itemNumbers == -1) {
            l = index;
            index++;
        }
        else {
            l = itemNumbers;
        }

        color = "#E8E8E8";
        colorIndex = 0;
        htmlString = "<table width=100% border=1 cellpadding=10>" +
                            "<thead>" +
                            "<tr>" +
                                "<th></th>" +
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
        originalName = names[l];
        names[l] = document.itemEdit.name.value;
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
        profits[l] = Number(priceSold[l]) - Number(priceBuy[l]) + "";
        percentReturn[l] = 10000 * profits[l] / priceBuy[l];
        percentReturn[l] += "";
        temp = percentReturn[l].split(".");
        percentReturn[l] = temp[0] / 100;
        daysToSell[l] = numberSellDays[l] - numberBuyDays[l];
        itemNumber[l] = document.itemEdit.itemNumber.value;
        startBid[l] = document.itemEdit.startBid.value;
        highestBid[l] = document.itemEdit.highestBid.value;
        
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

        reserve[l] = document.itemEdit.reserve.value;
        buyItNow[l] = document.itemEdit.buyItNow.value;
        shipping[l] = document.itemEdit.shipping.value;
        shipLength[l] = document.itemEdit.length.value;
        e = document.itemEdit.lengthUnits;
        shipLengthUnits[l] = e.options[e.selectedIndex].value;
        shipLengthUnitsIndex[l] = document.itemEdit.lengthUnits.selectedIndex;
        shipWidth[l] = document.itemEdit.width.value;
        e = document.itemEdit.widthUnits;
        shipWidthUnits[l] = e.options[e.selectedIndex].value;
        shipWidthUnitsIndex[l] = document.itemEdit.widthUnits.selectedIndex;
        shipHeight[l] = document.itemEdit.height.value;
        e = document.itemEdit.heightUnits;
        shipHeightUnits[l] = e.options[e.selectedIndex].value;
        shipHeightUnitsIndex[l] = document.itemEdit.heightUnits.selectedIndex;
        shipWeight[l] = document.itemEdit.weight.value;
        e = document.itemEdit.weightUnits;
        shipWeightUnits[l] = e.options[e.selectedIndex].value;
        shipWeightUnitsIndex[l] = document.itemEdit.weightUnits.selectedIndex;

        calendarString = "<select name=calendarItem onchange=setCalendar()>";

        if (itemNumbers == -1) {
            newXML(l);
        }
        else {
            editXML(l);
        }

        for (i = 0; i < index; i++) {
            if (colorIndex == 0) {
                color = "#E8E8E8";
                colorIndex = 1;
            }
            else {
                color = "#66CCFF";
                colorIndex = 0;
            }
            calendarString += "<option>" + names[i] + "</option>";
            htmlString += "<tr>";
            htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
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

        calendarString += "</select>";
        calendarList.innerHTML = calendarString;
        htmlString += "</tbody></table>";
        itemView.innerHTML = htmlString;
        document.getCalendarItem.calendarItem.selectedIndex = 0;
        setCalendar();
        calculateStats();
        window.location.href = '#items';
    }

    function removeItem(j) {
        name = names[j];
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                alert(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", "index.php?action=remove&un=" + username + "&in=" + name);
        xmlhttp.send();

        names.splice(j, 1);
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
        startBid.splice(j, 1);
        highestBid.splice(j, 1);
        reserve.splice(j, 1);
        buyItNow.splice(j, 1);
        shipping.splice(j, 1);
        shipLength.splice(j, 1);
        shipLengthUnits.splice(j, 1);
        shipLengthUnitsIndex.splice(j, 1);
        shipWidth.splice(j, 1);
        shipWidthUnits.splice(j, 1);
        shipWidthUnitsIndex.splice(j, 1);
        shipHeight.splice(j, 1);
        shipHeightUnits.splice(j, 1);
        shipHeightUnitsIndex.splice(j, 1);
        shipWeight.splice(j, 1);
        shipWeightUnits.splice(j, 1);
        shipWeightUnitsIndex.splice(j, 1);
        index--;

        htmlString = "<table width=100% border=1 cellpadding=10>" +
                            "<thead>" +
                            "<tr>" +
                                "<th></th>" +
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
        calendarItemString = "<select id='calendarItem'>";
        for (i = 0; i < index; i++) {
            if (colorIndex == 0) {
                color = "#E8E8E8";
                colorIndex = 1;
            }
            else {
                color = "#66CCFF";
                colorIndex = 0;
            }
            calendarItemString += "<option>" + names[i] + "</option>";
            htmlString += "<tr>";
            htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
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
        calendarItemString += "</select>";
        calendarList.innerHTML = calendarItemString;
        htmlString += "</table>";
        itemView.innerHTML = htmlString;
        calculateStats();
        document.getCalendarItem.calendarItem.selectedIndex = 0;
        setCalendar();
        window.location.href = '#items';
    }

    function cancelItem() {
        index--;
        window.location.href = "#items";
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
        window.location.reload();
    }

    function investmentCalculator() {
        if (document.investment.amountInvested.value != "") {
            investedAmountCalc = document.investment.amountInvested.value;
            totalReturn = 0;
            for (i = 0; i < index; i++) {
                totalReturn += percentReturn[i];
            }
            averageReturn = totalReturn / index;
            profitCalc = averageReturn * investedAmountCalc + "";
            profitTemp = profitCalc.split(".");
            profitCalc = profitTemp[0] / 100;
            document.investment.amountReturn.value = profitCalc;
        }
        else {
            if (document.investment.amountReturn.value != "") {
                returnAmountCalc = Number(document.investment.amountReturn.value);
                totalReturn = 0;
                for (i = 0; i < index; i++) {
                    totalReturn += percentReturn[i];
                }
                averageReturn = totalReturn / index;
                investedAmountCalc = 10000 * returnAmountCalc / averageReturn + "";
                investTemp = investedAmountCalc.split(".");
                investedAmountCalc = investTemp[0] / 100;
                document.investment.amountInvested.value = investedAmountCalc;
            }
            else {
                alert("Enter a value for either:\n\n" +
                    "Amount Invested\n\n" +
                    "Profit")
            }
        }
        window.location.reload();

    }

    function calculateStats() {
        totalProfit = 0;
        minProfit = Number(profits[0]);
        maxProfit = Number(profits[0]);
        averageProfit = 0;
        totalPercentReturn = 0;
        minPercentReturn = Number(percentReturn[0]);
        maxPercentReturn = Number(percentReturn[0]);
        averagePercentReturn = 0;
        totalBuy = 0;
        minBuy = Number(priceBuy[0]);
        maxBuy = Number(priceBuy[0]);
        averageBuy = 0;
        totalSell = 0;
        minSell = Number(priceSold[0]);
        maxSell = Number(priceSold[0]);
        averageSell = 0;
        totalDaysToSell = 0;
        minDaysToSell = Number(daysToSell[0]);
        maxDaysToSell = Number(daysToSell[0]);
        averageDaysToSell = 0;
        for (i = 0; i < index; i++) {
            totalProfit += Number(profits[i]);
            totalPercentReturn += Number(percentReturn[i]);
            totalBuy += Number(priceBuy[i]);
            totalSell += Number(priceSold[i]);
            totalDaysToSell += Number(daysToSell[i]);
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
            if (priceBuy[i] < minBuy) {
                minBuy = priceBuy[i];
            }
            if (priceBuy[i] > maxBuy) {
                maxBuy = priceBuy[i];
            }
            if (priceSold[i] < minSell) {
                minSell = priceSold[i];
            }
            if (priceSold[i] > maxSell) {
                maxSell = priceSold[i];
            }
            if (daysToSell[i] < minDaysToSell) {
                minDaysToSell = daysToSell[i];
            }
            if (daysToSell[i] > minDaysToSell) {
                maxDaysToSell = daysToSell[i];
            }
        }
        averageProfit = totalProfit / index + "";
        averagePercentReturn = totalPercentReturn / index;
        averageBuy = totalBuy / index;
        averageSell = totalSell / index;
        averageDaysToSell = (totalDaysToSell / index) + "";
        daysToSellTemp = averageDaysToSell.split(".");
        averageDaysToSell = daysToSellTemp[0] + "";


        statsTable.innerHTML = "<table>" +
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
                                "<tr height=20></tr>" +
                                "<tr><th>Days to Sell</th></tr>" +
                                "<tr><td>Average Days to Sell:</td><td>" + averageDaysToSell + "</td></tr>" +
                                "<tr><td>Max Days To Sell:</td><td>" + maxDaysToSell + "</td></tr>" +
                                "<tr><td>Min Days to Sell:</td><td>" + minDaysToSell + "</td></tr>" +
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

    function setCalendar() {
        weekDays = new Array();
        weekDays[0] = "Sunday";
        weekDays[1] = "Monday";
        weekDays[2] = "Tuesday";
        weekDays[3] = "Wednesday";
        weekDays[4] = "Thursday";
        weekDays[5] = "Friday";
        weekDays[6] = "Saturday";

        monthNames = new Array();
        monthNames[0] = "January";
        monthNames[1] = "February";
        monthNames[2] = "March";
        monthNames[3] = "April";
        monthNames[4] = "May";
        monthNames[5] = "June";
        monthNames[6] = "July";
        monthNames[7] = "August";
        monthNames[8] = "September";
        monthNames[9] = "October";
        monthNames[10] = "November";
        monthNames[11] = "December";

        itemIndex = document.getCalendarItem.calendarItem.selectedIndex;
        weekDayStart = 2;
        currentMonth = monthBuyIndex[itemIndex];
        currentYear = yearBuy[itemIndex];
        startMonth = currentMonth;
        dayBuyNumber = numberBuyDays[itemIndex];
        weekDayIndex = (dayBuyNumber % 7) + 2;
        weekDayMonthStart = weekDayIndex;
        for (j = 1; j < dayBuy[itemIndex]; j++) {
            weekDayMonthStart--;
            if (weekDayMonthStart < 0) {
                weekDayMonthStart = 6;
            }
        }
        if (currentMonth == 0) {
            if (currentYear == 2008) {
                weekDayMonthStart = 2;
            }
            if (currentYear == 2009) {
                weekDayMonthStart = 4;
            }
            if (currentYear == 2010) {
                weekDayMonthStart = 5;
            }
            if (currentYear == 2011) {
                weekDayMonthStart = 6;
            }
            if (currentYear == 2012) {
                weekDayMonthStart = 0;
            }
            if (currentYear == 2013) {
                weekDayMonthStart = 2;
            }
            if (currentYear == 2014) {
                weekDayMonthStart = 3;
            }
            if (currentYear == 2015) {
                weekDayMonthStart = 4;
            }
            if (currentYear == 2016) {
                weekDayMonthStart = 5;
            }
            if (currentYear == 2017) {
                weekDayMonthStart = 0;
            }

        }
        if (currentMonth == 1) {
            weekDayMonthStart -= 1;
        }
        monthTableCount = 0;
        daysMonthCount = 0;
        currentDay = 0;

        currentWeekDay = 0;
        maxMonthDay = 0;

        htmlString = "<table border=0 cellpadding=3><tr valign=top><td><table border=1>";
        htmlString += "<tr>" + monthNames[currentMonth] + " " + currentYear + "</tr>" +
                "<td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>";

        for (m = 0; m < dayBuy[itemIndex]; m++) {
            maxMonthDay = 0;
            if ((currentMonth <= 6 && currentMonth % 2 == 0) || (currentMonth >= 7 && currentMonth % 2 == 1) || currentMonth == 0) {
                maxMonthDay = 31;
            }
            if (((currentMonth < 6 && currentMonth % 2 == 1) || (currentMonth >= 7 && currentMonth % 2 == 0)) && currentMonth != 1) {
                maxMonthDay = 30;
            }
            if (currentMonth == 1) {
                if (currentYear % 4 == 0) {
                    maxMonthDay = 29;
                }
                else {
                    maxMonthDay = 28;
                }
            }
            if (currentWeekDay == 0) {
                htmlString += "<tr>";
            }

            if (currentDay == 0) {
                currentWeekDay = weekDayMonthStart;
                for (n = 0; n < weekDayMonthStart; n++) {
                    htmlString += "<td></td>";
                }
                currentWeekDay--;
            }
            else {
                htmlString += "<td>" + currentDay + "</td>";
            }

            if (currentWeekDay >= 6) {
                htmlString += "</tr>";
            }
            if (currentWeekDay < 6) {
                currentWeekDay++;
            }

            else {
                currentWeekDay = 0;
            }

            if (currentDay < maxMonthDay - 1) {
                currentDay++;
            }
            else {
                currentDay = 0;
            }
        }
        daysToSellIndex = daysToSell[itemIndex];
        if (startMonth == 0 || startMonth == 1) {
            daysToSellIndex++;
        }

        for (m = 0; m < daysToSellIndex; m++) {
            maxMonthDay = 0;
            if ((currentMonth <= 6 && currentMonth % 2 == 0) || (currentMonth >= 7 && currentMonth % 2 == 1) || currentMonth == 0) {
                maxMonthDay = 31;
            }
            if (((currentMonth < 6 && currentMonth % 2 == 1) || (currentMonth >= 7 && currentMonth % 2 == 0)) && currentMonth != 1) {
                maxMonthDay = 30;
            }
            if (currentMonth == 1) {
                if (currentYear % 4 == 0) {
                    maxMonthDay = 29;
                }
                else {
                    maxMonthDay = 28;
                }
            }
            if (currentWeekDay == 0) {
                htmlString += "<tr>";
            }

            if (currentDay == 0) {
                weekDayMonthStart = currentWeekDay;
                for (n = 0; n < weekDayMonthStart; n++) {
                    htmlString += "<td></td>";
                }
                currentDay++;
                if (m == 0 || m == daysToSellIndex - 1) {
                    htmlString += "<td bgcolor=yellow>" + currentDay + "</td>";
                }
                else {
                    htmlString += "<td>" + currentDay + "</td>";
                }
            }
            else {
                if (m == 0 || (m == daysToSellIndex - 1)) {
                    htmlString += "<td bgcolor=yellow>" + currentDay + "</td>";
                }
                else {
                    htmlString += "<td>" + currentDay + "</td>";
                }
                if (m == daysToSellIndex - 1 && currentDay == maxMonthDay) {
                    currentDay--;
                }
            }

            if (currentWeekDay >= 6) {
                htmlString += "</tr>";
            }
            if (currentWeekDay < 6) {
                currentWeekDay++;
            }

            else {
                currentWeekDay = 0;
            }

            if (currentDay < maxMonthDay) {
                currentDay++;
            }
            else {
                currentDay = 0;
                if (currentMonth < 11) {
                    currentMonth++;
                }
                else {
                    currentMonth = 0;
                    currentYear++;
                }
                htmlString += "</table></td>";
                if (monthTableCount == 0 || monthTableCount == 1) {
                    monthTableCount++;
                    htmlString += "<td>";
                    htmlString += "<table border=1>";
                    htmlString += "<tr>" + monthNames[currentMonth] + " " + currentYear + "</tr>" +
                        "<td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>";
                }
                else {
                    monthTableCount = 0;
                    htmlString += "</tr><tr valign=top><td>";
                    htmlString += "<table border=1>";
                    htmlString += "<tr>" + monthNames[currentMonth] + " " + currentYear + "</tr>" +
                        "<td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>";
                }
            }
        }
        endOfMonth = maxMonthDay - currentDay + 1;
        if (currentDay != maxMonthDay) {
            for (m = 0; m < endOfMonth; m++) {
                maxMonthDay = 0;
                if ((currentMonth <= 6 && currentMonth % 2 == 0) || (currentMonth >= 7 && currentMonth % 2 == 1) || currentMonth == 0) {
                    maxMonthDay = 31;
                }
                if (((currentMonth < 6 && currentMonth % 2 == 1) || (currentMonth >= 7 && currentMonth % 2 == 0)) && currentMonth != 1) {
                    maxMonthDay = 30;
                }
                if (currentMonth == 1) {
                    if (currentYear % 4 == 0) {

                        maxMonthDay = 29;
                    }
                    else {
                        maxMonthDay = 28;
                    }
                }
                if (currentWeekDay == 0) {
                    htmlString += "<tr>";
                }

                if (currentDay == 0) {
                    weekDayMonthStart = currentWeekDay;
                    for (n = 0; n < weekDayMonthStart; n++) {
                        htmlString += "<td></td>";
                    }
                    currentDay++;
                    htmlString += "<td>" + currentDay + "</td>";
                }
                else {
                    htmlString += "<td>" + currentDay + "</td>";
                }

                if (currentWeekDay >= 6) {
                    htmlString += "</tr>";
                }
                if (currentWeekDay < 6) {
                    currentWeekDay++;
                }

                else {
                    currentWeekDay = 0;
                }

                if (currentDay < maxMonthDay) {
                    currentDay++;
                }
                else {
                    currentDay = 0;
                }
            }
        }
        htmlString += "</table></td></tr></table>";
        calendarView.innerHTML = htmlString;
    }

    function contact() {
        window.location.href = "#items";
    }

    function newAccount() {
        username = document.account.newUserName.value;
        password = document.account.newPassword.value;
        repeatPassword = document.account.repeatPassword.value;
        userEmail = document.account.userEmail.value;

        accountValidation = "false";
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.responseText == "true") {
                    window.location.href = "#home";
                }
                else {
                    alert(xmlhttp.responseText);
                    window.location.href = "#createAccount";
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
                if (xmlResponse.length > 1) {
                    
                    readXML(xmlhttp.responseText);
                    window.location.href = "#home";
                    loginView.innerHTML = "Welcome " + username;
                }
                else {
                    window.location.href = "#loginPage";
                    login.innerHTML = "<table border=0>" +
                                            "<tr><td colspan=3><img src=iresell.JPG width=400></td></tr>" +
                                            "<tr><td colspan=3>Username</td></tr>" +
                                            "<tr><td colspan=3><input type=text width=9 name=username></td></tr>" +
                                            "<tr><td colspan=3>Password</td></tr>" +
                                            "<tr><td colspan=3><input type=password width=9 name=password></td></tr>" +
                                            "<tr><td><button onclick=loginWindow()>Log in</button></td><td width=30></td><td><a href=#createAccount>Create account</a></td></tr>" +
                                        "</table>";
                    window.location.reload();
                }
            }
        }
        login.innerHTML = "loading...";
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
                descriptions[k] = xmlString[i];
            if (j == 2)
                priceBuy[k] = xmlString[i];
            if (j == 3)
                monthBuy[k] = xmlString[i];
            if (j == 4)
                monthBuyIndex[k] = xmlString[i];
            if (j == 5)
                dayBuy[k] = xmlString[i];
            if (j == 6)
                dayBuyIndex[k] = xmlString[i];
            if (j == 7)
                yearBuy[k] = xmlString[i];
            if (j == 8)
                yearBuyIndex[k] = xmlString[i];
            if (j == 9)
                priceSold[k] = xmlString[i];
            if (j == 10)
                monthSell[k] = xmlString[i];
            if (j == 11)
                monthSellIndex[k] = xmlString[i];
            if (j == 12)
                daySell[k] = xmlString[i];
            if (j == 13)
                daySellIndex[k] = xmlString[i];
            if (j == 14)
                yearSell[k] = xmlString[i];
            if (j == 15)
                yearSellIndex[k] = xmlString[i];
            if (j == 16)
                numberBuyDays[k] = xmlString[i];
            if (j == 17)
                numberSellDays[k] = xmlString[i];
            if (j == 18)
                profits[k] = xmlString[i];
            if (j == 19)
                percentReturn[k] = xmlString[i];
            if (j == 20)
                daysToSell[k] = xmlString[i];
            if (j == 21)
                itemNumber[k] = xmlString[i];
            if (j == 22)
                startBid[k] = xmlString[i];
            if (j == 23)
                highestBid[k] = xmlString[i];
            if (j == 24)
                images[k] = xmlString[i];
            if (j == 25)
                endTimes[k] = xmlString[i];
            if (j == 26)
                reserve[k] = xmlString[i];
            if (j == 27)
                buyItNow[k] = xmlString[i];
            if (j == 28)
                shipping[k] = xmlString[i];
            if (j == 29)
                shipLength[k] = xmlString[i];
            if (j == 30)
                shipLengthUnits[k] = xmlString[i];
            if (j == 31)
                shipLengthUnitsIndex[k] = xmlString[i];
            if (j == 32)
                shipWidth[k] = xmlString[i];
            if (j == 33)
                shipWidthUnits[k] = xmlString[i];
            if (j == 34)
                shipWidthUnitsIndex[k] = xmlString[i];
            if (j == 35)
                shipHeight[k] = xmlString[i];
            if (j == 36)
                shipHeightUnits[k] = xmlString[i];
            if (j == 37)
                shipHeightUnitsIndex[k] = xmlString[i];
            if (j == 38)
                shipWeight[k] = xmlString[i];
            if (j == 39)
                shipWeightUnits[k] = xmlString[i];
            if (j == 40)
                shipWeightUnitsIndex[k] = xmlString[i];
            j++;
            if (j > 40) {
                j = 0;
                k++;
            }
        }
        
        for (x = 0; x < k; x++) {
            createItemWizard(x, -1);
            editItem(x);
        }
        window.location.href = "#home";
        color = "#E8E8E8";
        colorIndex = 0;
        index = descriptions.length;
        calendarItemString = "<select name=calendarItem onchange=setCalendar()>";
        htmlString = "<table width=100% border=1 cellpadding=10>" +
                            "<thead>" +
                            "<tr>" +
                                "<th></th>" +
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
        for (i = 0; i < index; i++) {
            htmlString += "<tr>";
            htmlString += "<td bgcolor=" + color + "><button onclick=removeItem(" + i + ")>X</button></td>";
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

            calendarItemString += "<option>" + names[i] + "</option>";

            if (colorIndex == 0) {
                colorIndex = 1;
                color = "#66CCFF";
            }
            else {
                colorIndex = 0;
                color = "#E8E8E8";
            }

        }
        htmlString += "</table>";
        itemView.innerHTML = htmlString;
        calendarItemString += "</select>";
        calendarList.innerHTML = calendarItemString;
        document.getCalendarItem.calendarItem.selectedIndex = 0;
        setCalendar();
        calculateStats();
    }

    function newXML(l) {
        name = names[l];
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
        startBids = startBid[l];
        highestBids = highestBid[l];
        reserves = reserve[l];
        buyItNows = buyItNow[l];
        shippings = shipping[l];
        shipLengths = shipLength[l];
        shipLengthUnit = shipLengthUnits[l];
        shipLengthUnitIndex = shipLengthUnitsIndex[l];
        shipWidths = shipWidth[l];
        shipWidthUnit = shipWidthUnits[l];
        shipWidthUnitIndex = shipWidthUnitsIndex[l];
        shipHeights = shipHeight[l];
        shipHeightUnit = shipHeightUnits[l];
        shipHeightUnitIndex = shipHeightUnitsIndex[l];
        shipWeights = shipWeight[l];
        shipWeightUnit = shipWeightUnits[l];
        shipWeightUnitIndex = shipWeightUnitsIndex[l];

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
            }
        }
        xmlhttp.open("GET", "index.php?action=load&un=" + username + "&in=" + name + "&id=" + description + "&pb=" + priceBought + "&mb=" + monthBought + "&mbi=" +
                                monthBoughtIndex + "&db=" + dayBought + "&dbi=" + dayBoughtIndex + "&yb=" + yearBought + "&ybi=" + yearBoughtIndex + "&ps=" + priceSell + "&ms=" + monthSold +
                                "&msi=" + monthSoldIndex + "&ds=" + daySold + "&dsi=" + daySoldIndex + "&ys=" + yearSold + "&ysi=" + yearSoldIndex + "&nbd=" + numberBoughtDays +
                                "&nsd=" + numberSoldDays + "&p=" + profit + "&pr=" + percentReturns + "&dts=" + daysToSold + "&inu=" + itemNumbers + "&sb=" + startBids + "&hb=" + highestBids + "&r=" + reserves +
                                "&bin=" + buyItNows + "&s=" + shippings + "&sl=" + shipLengths + "&slu=" + shipLengthUnit + "&slui=" + shipLengthUnitIndex + "&sw=" + shipWeights + "&swu=" +
                                shipWidthUnit + "&swui=" + shipWidthUnitIndex + "&sh=" + shipHeight + "&shu=" + shipHeightUnit + "&shui=" + shipHeightUnitIndex + "&swe=" + shipWeights +
                                "&sweu=" + shipWeightUnit + "&sweui=" + shipWeightUnitIndex, true);
        xmlhttp.send();
    }

    function editXML(c) {
        name = names[c];
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
        startBids = startBid[c];
        highestBids = highestBid[c];
        reserves = reserve[c];
        buyItNows = buyItNow[c];
        shippings = shipping[c];
        shipLengths = shipLength[c];
        shipLengthUnit = shipLengthUnits[c];
        shipLengthUnitIndex = shipLengthUnitsIndex[c];
        shipWidths = shipWidth[c];
        shipWidthUnit = shipWidthUnits[c];
        shipWidthUnitIndex = shipWidthUnitsIndex[c];
        shipHeights = shipHeight[c];
        shipHeightUnit = shipHeightUnits[c];
        shipHeightUnitIndex = shipHeightUnitsIndex[c];
        shipWeights = shipWeight[c];
        shipWeightUnit = shipWeightUnits[c];
        shipWeightUnitIndex = shipWeightUnitsIndex[c];
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                statsTable.innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "index.php?action=edit&on=" + originalName + "&un=" + username + "&in=" + name + "&id=" + description + "&pb=" + priceBought + "&mb=" + monthBought + "&mbi=" +
                                monthBoughtIndex + "&db=" + dayBought + "&dbi=" + dayBoughtIndex + "&yb=" + yearBought + "&ybi=" + yearBoughtIndex + "&ps=" + priceSell + "&ms=" + monthSold +
                                "&msi=" + monthSoldIndex + "&ds=" + daySold + "&dsi=" + daySoldIndex + "&ys=" + yearSold + "&ysi=" + yearSoldIndex + "&nbd=" + numberBoughtDays +
                                "&nsd=" + numberSoldDays + "&p=" + profit + "&pr=" + percentReturns + "&dts=" + daysToSold + "&inu=" + itemNumbers + "&sb=" + startBids + "&hb=" + highestBids + "&r=" + reserves +
                                "&bin=" + buyItNows + "&s=" + shippings + "&sl=" + shipLengths + "&slu=" + shipLengthUnit + "&slui=" + shipLengthUnitIndex + "&sw=" + shipWeights + "&swu=" +
                                shipWidthUnit + "&swui=" + shipWidthUnitIndex + "&sh=" + shipHeight + "&shu=" + shipHeightUnit + "&shui=" + shipHeightUnitIndex + "&swe=" + shipWeights +
                                "&sweu=" + shipWeightUnit + "&sweui=" + shipWeightUnitIndex, true);
        xmlhttp.send();
    }