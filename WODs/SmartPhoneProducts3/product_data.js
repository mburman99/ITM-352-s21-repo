<script>
/* this is a invoice for an order*/
 // Product 1
 var item1 = 'Gillette Sensor 3 Razor';
     var quantity1 = 2;
     var price1 = 1.23;
      // Product 2
      var item2 = 'Barbasol Shaving Cream';
     var quantity2 = 1;
     var price2 = 2.64;
     // Product 3
     var item3 = 'Nautica Cologne';
     var quantity3 = 1;
     var price3 = 6.17;
     // Product 4
     var item4 = 'Rubbing Alcohol';
     var quantity4 = 3;
     var price4 = 0.98; 
     // Product 5
     var item5 = 'Colgate Classic Toothbrush';
     var quantity5 = 12;
     var price5 = 1.89; 
     // Subtotal
     var subtotal = 0;
    
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="2">
        <tbody>
          <tr>
            <th style="text-align: center;" width="43%">Item</th>
            <th style="text-align: center;" width="11%">quantity</th>
            <th style="text-align: center;" width="13%">price</th>
            <th style="text-align: center;" width="54%">extended price</th>
          </tr>
          <script> 
          // Product 1
          var extended_price = quantity1*price1;
          var subtotal = extended_price + subtotal;
          document.write(`
          <tr>
            <td width="43%">${item1}</td>
            <td align="center" width="11%">${quantity1}</td>
            <td width="13%">$${price1}</td>
            <td width="54%">$${extended_price}</td>
          </tr>
          `)
          // Product 2
          var extended_price = quantity2*price2;
          var subtotal = extended_price + subtotal;
          document.write (`
          <tr>
            <td width="43%">${item2}</td>
            <td align="center" width="11%">${quantity2}</td>
            <td width="13%">$${price2}</td>
            <td width="54%">$${extended_price}</td>
          </tr>
          `)
          // Product 3
          var extended_price = quantity3*price3;
          var subtotal = extended_price + subtotal;
          document.write(`
          <tr>
            <td width="43%">${item3}</td>
            <td align="center" width="11%">${quantity3}</td>
            <td width="13%">$${price3}</td>
            <td width="54%">$${extended_price}</td>
          </tr>
          `)
          // Product 4
          var extended_price = quantity4*price4;
          var subtotal = extended_price + subtotal;
          document.write(`
          <tr>
            <td width="43%">${item4}</td>
            <td align="center" width="11%">${quantity4}</td>
            <td width="13%">$${price4}</td>
            <td width="54%">$${extended_price}</td>
          </tr>
          `)
          // Product 5
          var extended_price = quantity5*price5;
          var subtotal = extended_price + subtotal;
          document.write(`
          <tr>
            <td width="43%">${item5}</td>
            <td align="center" width="11%">${quantity5}</td>
            <td width="13%">$${price5}</td>
            <td width="54%">$${extended_price}</td>
          </tr>
          `)
</script>
<script>
   // compute tax
   var tax_rate = 0.0575;
     var tax = tax_rate*subtotal
     // Compute shipping
     if(subtotal <= 50){
       shipping = 2;
     }
     else if (subtotal <= 100){
       shipping = 5;
     }
     else {
       shipping = 0.05*subtotal;
     }
     // compute total
     var total = subtotal+tax+shipping;
</script>
          <tr>
            <td colspan="4" width="100%">&nbsp;</td>
          </tr>
          <tr>
            <td style="text-align: center;" colspan="3" width="67%">Sub-total</td>
            <td width="54%">$<script>document.write(subtotal)</script></td>
          </tr>
          <tr>
            <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Tax @ 5.75%</span></td>
            <td width="54%"><script>document.write(tax.toFixed(2))</script></td>
          </tr>
          <tr>
            <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Shipping</span></td>
            <td width="54%"><script>document.write(shipping.toFixed(2))</script></td>
          </tr>
          <tr>
            <td style="text-align: center;" colspan="3" width="67%"><strong>Total</strong></td>
            <td width="54%"><strong>$<script>document.write(total.toFixed(2))</script></strong></td>
          </tr>
        </tbody>
      </table>
    <div>
      <b>
       <br> OUR SHIPPING POLICY IS:A subtotal $0 - $49.99 will be $2 shipping
<br>A subtotal $50 - $99.99 will be $5 shipping
<br>Subtotals over $100 will be charged 5% of the subtotal amount
      </b>
    </div>  
</body>
</html>