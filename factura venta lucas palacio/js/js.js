function mostrar()
    {
        let item1=document.getElementById('prod1');
        let item2=document.getElementById('prod2');
        let item3=document.getElementById('prod3');
        let adic=0;
        //len. item de factura
        if(itemi.selectedIndex==0)

            {
                document.getElementById('desc01').value="";
                document.getElementById('vau01').value-0;
                document.getElementById('cant01').value=0;
                document.getElementById('vatel').value=0;
                /*--*/
            } 
        if(item1.selectedIndex==1)
            {
                document.getElementById('desce1').value="Hamburgueza Americana + Gaseosa Vaso+ Papa francesa";/*--*/ 
                document.getElementById('vaue1').value-itemi.options[itemi.selectedIndex].value;
                document.getElementById('vate1').value= (parseFloat(document.getElementById('cant@1').
                value) *parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);
            }
            if(iteml.selectedIndex==2)
                {
                    document.getElementById('descel').value="Perro Americano + Gaseosa vaso+ Papa francesa";/*--*/
                    document.getElementById('vau@1').value=item1.options[item1.selectedIndex].value;
                    document.getElementById('vate1').value=(parseFloat(document.getElementById('cant01').
                    value) *parseFloat(document.getElementById('vau01').value) || e).toFixed(0);
                }
            if(item1.selectedIndex==3)
                {
                    document.getElementById('desc01').value="Pizza Hawaiana + Gaseosa vaso";/**/
                    document.getElementById('vaue1').value=iteml.options[itemi.selectedIndex].value;
                    document.getElementById('vat@1').value=(parseFloat(document.getElementById('cant01').
                    value)*parseFloat(document.getElementById('vaue1').value) || 0).toFixed(0);
                }
                //2do. iten de factura
            if(item2.selectedIndex==0)
                {
                    document.getElementById('desc02').value="";
                    document.getElementById('vau82').value=0;
                    document.getElementById('cant02').value=0;
                    document.getElementById('vate2').value=0;
                    /*--*/
                }
            if(item2.selectedIndex==1)
                {
                    document.getElementById('desc02').value="hamburgeza Amenricana+ Gaseosa vaso+papas francesa";/*--*/
                    document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
                    document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed();
                }

            if(item3.selectedIndex==2)
                {
                    document.getElementById('desc03').value="Perro Americano Gaseosa vaso+ Papa francesa";//
                    document.getElementById('vau83').value=item3.options[item3.selectedIndex].value;
                    document.getElementById('vat83').value= (parseFloat(document.getElementById('cant83').
                    value)*parseFloat(document.getElementById('vau83').value) || 0).toFixed(0);
                }

            if(item3.selectedIndex==3)
                {
                    document.getElementById('desc03').value="Pizza Hawaiana Gaseosa vaso";/**/
                    document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; document.getElementById('vate3').value= (parseFloat(document.getElementById('cante3').
                    value) *parseFloat(document.getElementById('vaue3').value) || 0).toFixed(0);
                }   
                // Calcular Adicionales *//
                let totaladice=0;
                if(document.getElementById('checkbox').checked)
                {
            totaladice += 3000; // Suman el valor de cerveza
                }


                if (document.getElementById("checkbox2").checked)
                {
                    totaladic0 += 2500;//Suma valor de neladd
                }
                
                if (document.getElementById('checkbox').checked) 
                {
                totaladic0 += 2300; // Sumar el valor de jugo
                }
                // Asignar el valor total al campo correspondiente 
                document.getElementById('adice').value=totaladic0;
                //Calcular valor subtotal*******//
                document.getElementById('subt').value=(parseFloat(document.getElementById('vate1').value) +parseFloat(document.getElementById('vate2').value)+parseFloat(document.getElementById ('vat83').value)+parseFloat(document.getElementById('adice').value) || 0).toFixed(0);
                //Calcular Iva***********//
                document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19|| 0).toFixed(0);
                //Calcular Descuento...

                if(document.getElementById('radiol').checked)
                {
                document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10|| 0).toFixed(0);
                }
                else if(document.getElementById('radio2').checked)
                {
                document.getElementById('desc').value= (parseFloat(document.getElementById('subt'). value)*0.00||0).toFixed(0);
                }
                    else if (document.getElementById('radio3').checked)
                            {
                                document.getElementById('desc').value=(parseFloat(document.getElementById('subt'). value)*e.ee||0).toFixed(0);
                                document.getElementById('neto').value= (parseFloat(document.getElementById('subt').value) +parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById ('desc').value) || 6).toFixed(0);
                            }

function enviar(){

swal("ESTIMADO CLIENTE", "SU PEDIDO ESTA EN PROCESO ESPERE AL LLAMADO DE SU TURNO... ","success");
    }
}