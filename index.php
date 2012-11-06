<?php
    //action variable retrieved from html/javascript to determine what action should be taken (new item, edit item, delete item, etc)
    $action=$_GET["action"];

    //item variables retrieved from html/javascript
    $i=$_GET["in"];
    $qu=$_GET["qu"];
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
    $hb=$_GET["hb"];

    //variables for new account
    $un=$_GET["un"];
    $pw=$_GET["pw"];
    $rpw=$_GET["rpw"];
    $ue=$_GET["ue"];

    //auxillary variable for delete item
    $on=$_GET["on"];

    //ebay variables
    $s_endpoint = "http://open.api.ebay.com/shopping?";
    $appid = 'Princess-3830-4887-9530-d802342a42a9';
    $responseEncoding = 'XML';

    //email variables
    $su=$_GET["su"];
    $m=$_GET["m"];
    
    $doc=new DOMDocument();

    //Retrieves values from xml on login to populate the javascript arrays
    if($action=="login"){
        //retrieves credentials
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);
        if($node->getElementsByTagName($un)->item(0)==null){
                //if so, echo error message
                echo "***Invalid Username***";
        }
        else{
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
                    $outputString=$outputString.$xmlItem->getElementsByTagName("quantity")->item(0)->nodeValue."~";
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
                        $imgSrc=$ebayDoc->Item->GalleryURL;
                        $endTime=$ebayDoc->Item->EndTime;
                        $outputString=$outputString.$currentPrice."~";
                        $outputString=$outputString.$imgSrc."~";
                        $outputString=$outputString.$endTime."~";
                    }
                    else{
                        $outputString=$outputString.$xmlItem->getElementsByTagName("highestBids")->item(0)->nodeValue."~";  
                        $outputString=$outputString."iresell.JPG"."~"; 
                        $outputString=$outputString.""."~"; 
                    }
                }

                //sends string to html/javascript
                echo $outputString;
            }
            else{

                //sends message to html/javascript if password is incorrect
                echo "***Incorrect Password***";
            }
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
        $quantity=$doc->createElement("quantity");
        $quantity->appendChild($doc->createTextNode($qu));
        $itemName->appendChild($quantity);

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

        $highestBids=$doc->createElement("highestBids");
        $highestBids->appendChild($doc->createTextNode($hb));
        $itemName->appendChild($highestBids);
        
        //add outer item tag to xml file and save
        $node->appendChild($itemName);
        $doc->save("ireselldata.xml");
    }

    if($action=="newAccount"){
        //check if passwords match
        if($pw!=$rpw){
            //if not, echo error message
            echo "***Passwords do not match***";
        }
        else{
            //load xml document
            $doc->load("ireselldata.xml");
            $node=$doc->getElementsByTagName("ireselldata")->item(0);
            $node=$doc->importNode($node, true);
            
            //check if username already exists
            if($node->getElementsByTagName($un)->item(0)!=null){
                //if so, echo error message
                echo "***Username ".$un." already exists***";
            }
            else{
                //create username node
                $username=$doc->createElement($un);
            
                //append password and user email to username node
                $password=$doc->createElement("password");
                $password->appendChild($doc->createTextNode($pw));
                $username->appendChild($password);

                $userEmail=$doc->createElement("userEmail");
                $userEmail->appendChild($doc->createTextNode($ue));
                $username->appendChild($userEmail);

                //append username node to xml doc and save
                $node->appendChild($username);
                $doc->save("ireselldata.xml");

                $to=$ue;
                $subject="New User Account";
                $message="You have succesfully set up an account with iResell. Your username is ".$un." and your password is ".$pw;
                $headers="From:"."csvteam@iresellapp.com";

                mail($to, $subject, $message, $headers);

                echo "true";
            }
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
                $itemNodes->getElementsByTagName("quantity")->item(0)->nodeValue=$qu;
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
                $itemNodes->getElementsByTagName("highestBids")->item(0)->nodeValue=$hb;
            }
        }
        $doc->save("ireselldata.xml");
    }

    if($action=="ebay"){
        $selectedItemID=$inu;
        $apicallb  = "$s_endpoint";
        $apicallb .= "callname=GetSingleItem";
        $apicallb .= "&version=563";
        $apicallb .= "&appid=$appid";
        $apicallb .= "&itemid=$selectedItemID";
        $apicallb .= "&responseencoding=$responseEncoding";
        $ebayDoc=simplexml_load_file($apicallb);
        $currentPrice=$ebayDoc->Item->ConvertedCurrentPrice;
        $imgSrc=$ebayDoc->Item->GalleryURL;
        $endTime=$ebayDoc->Item->EndTime;
        $outputString=$outputString.$currentPrice."~";
        $outputString=$outputString.$imgSrc."~";
        $outputString=$outputString.$endTime."~";
        echo $outputString;
    }

    if($action=="email"){
        $doc->load("ireselldata.xml");
        $node=$doc->getElementsByTagName("ireselldata")->item(0);

        if($node->getElementsByTagName($un)->item(0)==null){
                echo "***Error in sending email***";
        }
        else{
            $node=$node->getElementsByTagName($un)->item(0);
            $userEmailAddress=$node->getElementsByTagName("userEmail")->item(0)->nodeValue;
            $subjectContact=$su;
            $messageContact=$m;
            $messageUser="Your email has successfully been sent to iResell. We will respond to you very shortly.";
            $headerUser="From:".$userEmailAddress;
            $headerUs="From:"."csvteam@iresellapp.com";
            
            if(mail("eshe042@gmail.com", $subjectContact, $messageContact, $headerUser)){
                if(mail($userEmailAddress, "Thank you for contacting us!", $messageUser, $headerUs)){
                    echo "true";
                }
                else{
                    echo "***Error in sending email***";
                }
            }
            else{
                echo "***Error in sending email***";
            }
        }
    }

    if($action=="ebayPrice"){
        $search=$_GET["search"];
        error_reporting(E_ALL);  // Turn on all errors, warnings and notices for easier debugging

        // API request variables
        $endpoint = 'http://svcs.ebay.com/services/search/FindingService/v1';  // URL to call
        $version = '1.0.0';  // API version supported by your application
        $globalid = 'EBAY-US';  // Global ID of the eBay site you want to search (e.g., EBAY-DE)
        $query = $search;  // You may want to supply your own query
        $safequery = urlencode($query);  // Make the query URL-friendly
        $i = '0';  // Initialize the item filter index to 0

        // Create a PHP array of the item filters you want to use in your request
        $filterarray =
        array(
            array(
                'paramName' => 'Currency',
                'paramValue' => 'USD')
        );

        // Generates an indexed URL snippet from the array of item filters
        function buildURLArray ($filterarray) {
            global $urlfilter;
            global $i;
            // Iterate through each filter in the array
            foreach($filterarray as $itemfilter) {
                // Iterate through each key in the filter
                foreach ($itemfilter as $key =>$value) {
                    if(is_array($value)) {
                        foreach($value as $j => $content) { // Index the key for each value
                            $urlfilter .= "&itemFilter($i).$key($j)=$content";
                        }
                    }
                    else {
                        if($value != "") {
                            $urlfilter .= "&itemFilter($i).$key=$value";
                        }
                    }
                }
                $i++;
            }
            return "$urlfilter";
        } // End of buildURLArray function

        // Build the indexed item filter URL snippet
        buildURLArray($filterarray);

        // Construct the findItemsByKeywords HTTP GET call 
        $apicall = "$endpoint?";
        $apicall .= "OPERATION-NAME=findItemsByKeywords";
        $apicall .= "&SERVICE-VERSION=$version";
        $apicall .= "&SECURITY-APPNAME=$appid";
        $apicall .= "&GLOBAL-ID=$globalid";
        $apicall .= "&keywords=$safequery";
        $apicall .= "&paginationInput.entriesPerPage=3";
        $apicall .= "$urlfilter";

        $resp = simplexml_load_file($apicall);

        // Check to see if the request was successful, else print an error
        if ($resp->ack == "Success") {
            $results = ''; 
            foreach($resp->searchResult->item as $item) {
                $pic   = $item->galleryURL;
                $price = $item->sellingStatus->currentPrice;
                $title = $item->title;
  
                $results=$results.$title."^&";
                $results=$results.$pic."^&";
                $results=$results.$price."~&";
            }
        }

        // If the response does not indicate 'Success,' print an error
        else {
            $results  = "<h3>Oops! The request was not successful. Make sure you are using a valid ";
            $results .= "AppID for the Production environment.</h3>";
        }
        echo $results;
    }
?>