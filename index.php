<?php
    //action variable retrieved from html/javascript to determine what action should be taken (new item, edit item, delete item, etc)
    $action=$_GET["action"];

    //item variables retrieved from html/javascript
    $i=$_GET["in"];
    $id=$_GET["id"];
    $pb=$_GET["pb"];
    $mb=$_GET["mb"];
    $mbi=$_GET["mbi"];
    $db=$_GET["db"];
    $dbi=$_GET["dbi"];
    $yb=$_GET["yb"];
    $ybi=$_GET["ybi"];
    $ps=$_GET["ps"];
    $ms=$_GET["ms"];
    $msi=$_GET["msi"];
    $ds=$_GET["ds"];
    $dsi=$_GET["dsi"];
    $ys=$_GET["ys"];
    $ysi=$_GET["ysi"];
    $nbd=$_GET["nbd"];
    $nsd=$_GET["nsd"];
    $p=$_GET["p"];
    $pr=$_GET["pr"];
    $dts=$_GET["dts"];
    $inu=$_GET["inu"];
    $sb=$_GET["sb"];
    $hb=$_GET["hb"];
    $r=$_GET["r"];
    $bin=$_GET["bin"];
    $s=$_GET["s"];
    $sl=$_GET["sl"];
    $slu=$_GET["slu"];
    $slui=$_GET["slui"];
    $sw=$_GET["sw"];
    $swu=$_GET["swu"];
    $swui=$_GET["swui"];
    $sh=$_GET["sh"];
    $shu=$_GET["shu"];
    $shui=$_GET["shui"];
    $swe=$_GET["swe"];
    $sweu=$_GET["sweu"];
    $sweui=$_GET["sweui"];

    //variables for new account
    $un=$_GET["un"];
    $pw=$_GET["pw"];
    $rpw=$_GET["rpw"];
    $at=$_GET["at"];

    //auxillary variable for delete item
    $on=$_GET["on"];

    $s_endpoint = "http://open.api.ebay.com/shopping?";
    $appid = 'Princess-3830-4887-9530-d802342a42a9';
    $responseEncoding = 'XML';
    
    $doc=new DOMDocument();

    //Retrieves values from xml on login to populate the javascript arrays
    if($action=="login"){

        //retrieves credentials
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $password=$node->getElementsByTagName("password")->item(0)->nodeValue;

        //starting the output string
        $outputString="";

        //checks password before retrieving item information
        if($pw==$password){
           $items=$node->getElementsByTagName("item"); 

           //loop to create string with all the item info with ~ as delimiter to be used by javascript
           foreach($items as $xmlItem){
               $outputString=$outputString.$xmlItem->getElementsByTagName("itemName")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("itemDescription")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("priceBuy")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("monthBuy")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("monthBuyIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("dayBuy")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("dayBuyIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("yearBuy")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("yearBuyIndex")->item(0)->nodeValue."~";
               if($xmlItem->getElementsByTagName("itemNumbers")->item(0)->nodeValue!=""){
                    $selectedItemID=$xmlItem->getElementsByTagName("itemNumbers")->item(0)->nodeValue;
                    $apicallb  = "$s_endpoint";
                    $apicallb .= "callname=GetSingleItem";
                    $apicallb .= "&version=563";
                    $apicallb .= "&appid=$appid";
                    $apicallb .= "&itemid=$selectedItemID";
                    $apicallb .= "&responseencoding=$responseEncoding";
                    $ebayDoc=simplexml_load_file($apicallb);
                    $currentPrice=$ebayDoc->Item->ConvertedCurrentPrice;
                    $outputString=$outputString.$currentPrice."~";
               }
               else{
                    $outputString=$outputString.$xmlItem->getElementsByTagName("priceSold")->item(0)->nodeValue."~";    
               }
               $outputString=$outputString.$xmlItem->getElementsByTagName("monthSold")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("monthSoldIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("daySold")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("daySoldIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("yearSold")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("yearSoldIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("numberBoughtDays")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("numberSoldDays")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("profits")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("percentReturns")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("daysToSold")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("itemNumbers")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("startBids")->item(0)->nodeValue."~";
               if($xmlItem->getElementsByTagName("itemNumbers")->item(0)->nodeValue!=""){
                    $selectedItemID=$xmlItem->getElementsByTagName("itemNumbers")->item(0)->nodeValue;
                    $apicallb  = "$s_endpoint";
                    $apicallb .= "callname=GetSingleItem";
                    $apicallb .= "&version=563";
                    $apicallb .= "&appid=$appid";
                    $apicallb .= "&itemid=$selectedItemID";
                    $apicallb .= "&responseencoding=$responseEncoding";
                    $ebayDoc=simplexml_load_file($apicallb);
                    $currentPrice=$ebayDoc->Item->ConvertedCurrentPrice;
                    $outputString=$outputString.$currentPrice."~";
               }
               else{
                    $outputString=$outputString.$xmlItem->getElementsByTagName("highestBids")->item(0)->nodeValue."~";    
               }
               $outputString=$outputString.$xmlItem->getElementsByTagName("reserves")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("buyItNows")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shippings")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipLengths")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipLengthUnit")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipLengthUnitIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWidths")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWidthUnit")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWidthUnitIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipHeights")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipHeightUnit")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipHeightUnitIndex")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWeights")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWeightUnit")->item(0)->nodeValue."~";
               $outputString=$outputString.$xmlItem->getElementsByTagName("shipWeightUnitIndex")->item(0)->nodeValue."~";
           }

           //sends string to html/javascript
           echo $outputString;
        }
        else{

            //sends message to html/javascript if password is incorrect
            echo "incorrect password";
        }
    }

    //Creates new item tag in xml
    if($action=="load"){
        //creates outer item node within which the item information is stored
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $node=$doc->importNode($node, true);
        $itemName=$doc->createElement("item");
        
        //for each piece of information about the item:

        //create information tag
        $item=$doc->createElement("itemName");

        //populate tag with item information which is in the variable retrieved initially from html/javascript
        $item->appendChild($doc->createTextNode($i));

        //add information tag to outer item node
        $itemName->appendChild($item);

        //repeat for each piece of information about the item
        $itemDescription=$doc->createElement("itemDescription");
        $itemDescription->appendChild($doc->createTextNode($id));
        $itemName->appendChild($itemDescription);

        $priceBuy=$doc->createElement("priceBuy");
        $priceBuy->appendChild($doc->createTextNode($pb));
        $itemName->appendChild($priceBuy);

        $monthBuy=$doc->createElement("monthBuy");
        $monthBuy->appendChild($doc->createTextNode($mb));
        $itemName->appendChild($monthBuy);

        $monthBuyIndex=$doc->createElement("monthBuyIndex");
        $monthBuyIndex->appendChild($doc->createTextNode($mbi));
        $itemName->appendChild($monthBuyIndex);

        $dayBuy=$doc->createElement("dayBuy");
        $dayBuy->appendChild($doc->createTextNode($db));
        $itemName->appendChild($dayBuy);

        $dayBuyIndex=$doc->createElement("dayBuyIndex");
        $dayBuyIndex->appendChild($doc->createTextNode($dbi));
        $itemName->appendChild($dayBuyIndex);

        $yearBuy=$doc->createElement("yearBuy");
        $yearBuy->appendChild($doc->createTextNode($yb));
        $itemName->appendChild($yearBuy);

        $yearBuyIndex=$doc->createElement("yearBuyIndex");
        $yearBuyIndex->appendChild($doc->createTextNode($ybi));
        $itemName->appendChild($yearBuyIndex);

        $priceSold=$doc->createElement("priceSold");
        $priceSold->appendChild($doc->createTextNode($ps));
        $itemName->appendChild($priceSold);

        $monthSold=$doc->createElement("monthSold");
        $monthSold->appendChild($doc->createTextNode($ms));
        $itemName->appendChild($monthSold);

        $monthSoldIndex=$doc->createElement("monthSoldIndex");
        $monthSoldIndex->appendChild($doc->createTextNode($msi));
        $itemName->appendChild($monthSoldIndex);

        $daySold=$doc->createElement("daySold");
        $daySold->appendChild($doc->createTextNode($ds));
        $itemName->appendChild($daySold);

        $daySoldIndex=$doc->createElement("daySoldIndex");
        $daySoldIndex->appendChild($doc->createTextNode($dsi));
        $itemName->appendChild($daySoldIndex);

        $yearSold=$doc->createElement("yearSold");
        $yearSold->appendChild($doc->createTextNode($ys));
        $itemName->appendChild($yearSold);

        $yearSoldIndex=$doc->createElement("yearSoldIndex");
        $yearSoldIndex->appendChild($doc->createTextNode($ysi));
        $itemName->appendChild($yearSoldIndex);

        $numberBoughtDays=$doc->createElement("numberBoughtDays");
        $numberBoughtDays->appendChild($doc->createTextNode($nbd));
        $itemName->appendChild($numberBoughtDays);

        $numberSoldDays=$doc->createElement("numberSoldDays");
        $numberSoldDays->appendChild($doc->createTextNode($nsd));
        $itemName->appendChild($numberSoldDays);

        $profits=$doc->createElement("profits");
        $profits->appendChild($doc->createTextNode($p));
        $itemName->appendChild($profits);

        $percentReturns=$doc->createElement("percentReturns");
        $percentReturns->appendChild($doc->createTextNode($pr));
        $itemName->appendChild($percentReturns);

        $daysToSold=$doc->createElement("daysToSold");
        $daysToSold->appendChild($doc->createTextNode($dts));
        $itemName->appendChild($daysToSold);

        $itemNumbers=$doc->createElement("itemNumbers");
        $itemNumbers->appendChild($doc->createTextNode($inu));
        $itemName->appendChild($itemNumbers);

        $startBids=$doc->createElement("startBids");
        $startBids->appendChild($doc->createTextNode($sb));
        $itemName->appendChild($startBids);

        $highestBids=$doc->createElement("highestBids");
        $highestBids->appendChild($doc->createTextNode($hb));
        $itemName->appendChild($highestBids);

        $reserves=$doc->createElement("reserves");
        $reserves->appendChild($doc->createTextNode($r));
        $itemName->appendChild($reserves);

        $buyItNows=$doc->createElement("buyItNows");
        $buyItNows->appendChild($doc->createTextNode($bin));
        $itemName->appendChild($buyItNows);

        $shippings=$doc->createElement("shippings");
        $shippings->appendChild($doc->createTextNode($s));
        $itemName->appendChild($shippings);

        $shipLengths=$doc->createElement("shipLengths");
        $shipLengths->appendChild($doc->createTextNode($sl));
        $itemName->appendChild($shipLengths);

        $shipLengthUnit=$doc->createElement("shipLengthUnit");
        $shipLengthUnit->appendChild($doc->createTextNode($slu));
        $itemName->appendChild($shipLengthUnit);

        $shipLengthUnitIndex=$doc->createElement("shipLengthUnitIndex");
        $shipLengthUnitIndex->appendChild($doc->createTextNode($slui));
        $itemName->appendChild($shipLengthUnitIndex);

        $shipWidths=$doc->createElement("shipWidths");
        $shipWidths->appendChild($doc->createTextNode($sw));
        $itemName->appendChild($shipWidths);

        $shipWidthUnit=$doc->createElement("shipWidthUnit");
        $shipWidthUnit->appendChild($doc->createTextNode($swu));
        $itemName->appendChild($shipWidthUnit);

        $shipWidthUnitIndex=$doc->createElement("shipWidthUnitIndex");
        $shipWidthUnitIndex->appendChild($doc->createTextNode($swui));
        $itemName->appendChild($shipWidthUnitIndex);

        $shipHeights=$doc->createElement("shipHeights");
        $shipHeights->appendChild($doc->createTextNode($sh));
        $itemName->appendChild($shipHeights);

        $shipHeightUnit=$doc->createElement("shipHeightUnit");
        $shipHeightUnit->appendChild($doc->createTextNode($shu));
        $itemName->appendChild($shipHeightUnit);

        $shipHeightUnitIndex=$doc->createElement("shipHeightUnitIndex");
        $shipHeightUnitIndex->appendChild($doc->createTextNode($shui));
        $itemName->appendChild($shipHeightUnitIndex);

        $shipWeights=$doc->createElement("shipWeights");
        $shipWeights->appendChild($doc->createTextNode($swe));
        $itemName->appendChild($shipWeights);

        $shipWeightUnit=$doc->createElement("shipWeightUnit");
        $shipWeightUnit->appendChild($doc->createTextNode($sweu));
        $itemName->appendChild($shipWeightUnit);

        $shipWeightUnitIndex=$doc->createElement("shipWeightUnitIndex");
        $shipWeightUnitIndex->appendChild($doc->createTextNode($sweui));
        $itemName->appendChild($shipWeightUnitIndex);
        
        //add outer item tag to xml file and save
        $node->appendChild($itemName);
        $doc->save("ireselldata.xml");
        echo "test";
    }

    if($action=="newAccount"){
        if($pw!=$rpw){
            echo "false";
        }
        else{
            $node=$doc->getElementsByTagName("ireselldata")->item(0);
            $node=$doc->importNode($node, true);
            $username=$doc->createElement($un);

            $password=$doc->createElement("password");
            $password->appendChild($doc->createTextNode($pw));
            $username->appendChild($password);

            $accountType=$doc->createElement("accountType");
            $accountType->appendChild($doc->createTextNode($at));
            $username->appendChild($accountType);

            $node->appendChild($username);
            $doc->save("ireselldata.xml");
            echo "true";
        }
    }

    //remove item from xml
    if($action=="remove"){

        //load and import item node based on username and item name
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $node=$doc->importNode($node, true);
        $itemNode=$node->getElementsByTagName("item");
        foreach($itemNode as $itemNodes){
            $itemNodesRemove=$itemNodes->getElementsByTagName("itemName")->item(0)->nodeValue;
            if($itemNodesRemove==$i){
                $node->removeChild($itemNodes);
            }
        }
        $doc->save("ireselldata.xml");
    }

    if($action=="edit"){
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $node=$doc->importNode($node, true);
        $itemNode=$node->getElementsByTagName("item");
        foreach($itemNode as $itemNodes){
            $itemNodesEdit=$itemNodes->getElementsByTagName("itemName")->item(0)->nodeValue;
            if($itemNodesEdit==$on){
                $itemNodes->getElementsByTagName("itemName")->item(0)->nodeValue=$i;
                $itemNodes->getElementsByTagName("itemDescription")->item(0)->nodeValue=$id;
                $itemNodes->getElementsByTagName("priceBuy")->item(0)->nodeValue=$pb;
                $itemNodes->getElementsByTagName("monthBuy")->item(0)->nodeValue=$mb;
                $itemNodes->getElementsByTagName("monthBuyIndex")->item(0)->nodeValue=$mbi;
                $itemNodes->getElementsByTagName("dayBuy")->item(0)->nodeValue=$db;
                $itemNodes->getElementsByTagName("dayBuyIndex")->item(0)->nodeValue=$dbi;
                $itemNodes->getElementsByTagName("yearBuy")->item(0)->nodeValue=$yb;
                $itemNodes->getElementsByTagName("yearBuyIndex")->item(0)->nodeValue=$ybi;
                $itemNodes->getElementsByTagName("priceSold")->item(0)->nodeValue=$ps;
                $itemNodes->getElementsByTagName("monthSold")->item(0)->nodeValue=$ms;
                $itemNodes->getElementsByTagName("monthSoldIndex")->item(0)->nodeValue=$msi;
                $itemNodes->getElementsByTagName("daySold")->item(0)->nodeValue=$ds;
                $itemNodes->getElementsByTagName("daySoldIndex")->item(0)->nodeValue=$dsi;
                $itemNodes->getElementsByTagName("yearSold")->item(0)->nodeValue=$ys;
                $itemNodes->getElementsByTagName("yearSoldIndex")->item(0)->nodeValue=$ysi;
                $itemNodes->getElementsByTagName("numberBoughtDays")->item(0)->nodeValue=$nbd;
                $itemNodes->getElementsByTagName("numberSoldDays")->item(0)->nodeValue=$nsd;
                $itemNodes->getElementsByTagName("profits")->item(0)->nodeValue=$p;
                $itemNodes->getElementsByTagName("percentReturns")->item(0)->nodeValue=$pr;
                $itemNodes->getElementsByTagName("daysToSold")->item(0)->nodeValue=$dts;
                $itemNodes->getElementsByTagName("itemNumbers")->item(0)->nodeValue=$inu;
                $itemNodes->getElementsByTagName("startBids")->item(0)->nodeValue=$sb;
                $itemNodes->getElementsByTagName("highestBids")->item(0)->nodeValue=$hb;
                $itemNodes->getElementsByTagName("reserves")->item(0)->nodeValue=$r;
                $itemNodes->getElementsByTagName("buyItNows")->item(0)->nodeValue=$bin;
                $itemNodes->getElementsByTagName("shippings")->item(0)->nodeValue=$s;
                $itemNodes->getElementsByTagName("shipLengths")->item(0)->nodeValue=$sl;
                $itemNodes->getElementsByTagName("shipLengthUnit")->item(0)->nodeValue=$slu;
                $itemNodes->getElementsByTagName("shipLengthUnitIndex")->item(0)->nodeValue=$slui;
                $itemNodes->getElementsByTagName("shipWidths")->item(0)->nodeValue=$sw;
                $itemNodes->getElementsByTagName("shipWidthUnit")->item(0)->nodeValue=$swu;
                $itemNodes->getElementsByTagName("shipWidthUnitIndex")->item(0)->nodeValue=$swui;
                $itemNodes->getElementsByTagName("shipHeights")->item(0)->nodeValue=$sh;
                $itemNodes->getElementsByTagName("shipHeightUnit")->item(0)->nodeValue=$shu;
                $itemNodes->getElementsByTagName("shipHeightUnitIndex")->item(0)->nodeValue=$shui;
                $itemNodes->getElementsByTagName("shipWeights")->item(0)->nodeValue=$swe;
                $itemNodes->getElementsByTagName("shipWeightUnit")->item(0)->nodeValue=$sweu;
                $itemNodes->getElementsByTagName("shipWeightUnitIndex")->item(0)->nodeValue=$sweui;
            }
        }
        $doc->save("ireselldata.xml");
    }

    if(action=="ebay"){
        $ebayEndpoint="http://open.api.ebay.com/shopping?callname=GetSingleItem&appid=IanDoane-c375-483f-aef7-011bd5a48fb0&version=563";
    }
?>