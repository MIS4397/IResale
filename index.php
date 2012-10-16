<?php
    $action=$_GET["action"];
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
    $un=$_GET["un"];
    $pw=$_GET["pw"];
    $rpw=$_GET["rpw"];
    $at=$_GET["at"];
    $on=$_GET["on"];
    
    $doc=new DOMDocument();

    if($action=="login"){
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $password=$node->getElementsByTagName("password")->item(0)->nodeValue;
        $outputString="";
        if($pw==$password){
           $items=$node->getElementsByTagName("item"); 
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
               $outputString=$outputString.$xmlItem->getElementsByTagName("priceSold")->item(0)->nodeValue."~";
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
           }
           echo $outputString;
        }
        else{
            echo "incorrect password";
        }
    }

    if($action=="load"){
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $node=$doc->importNode($node, true);
        $itemName=$doc->createElement("item");
        
        $item=$doc->createElement("itemName");
        $item->appendChild($doc->createTextNode($i));
        $itemName->appendChild($item);

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

        $node->appendChild($itemName);
        $doc->save("ireselldata.xml");
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

    if($action=="remove"){
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        $node=$node->getElementsByTagName($un)->item(0);
        $node=$doc->importNode($node, true);
        $itemNode=$node->getElementsByTagName("item");
        foreach($itemNode as $itemNodes){
            $itemNodesRemove=$itemNodes->getElementsByTagName("itemName")->item(0)->nodeValue;
            if($itemNodesRemove==$i){
                $node->removeChild($itemNodes);
                echo $i;   
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
                echo $i;   
            }
        }
        $doc->save("ireselldata.xml");
    }
    if(action=="ebay"){
        
    }
?>