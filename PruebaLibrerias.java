import mx.tecnm.valladolid.Tuz.Punto;
import mx.tecnm.valladolid.Vehiculo;
import javax.swing.*;
/**
 * @(#)PruebaLibrerias.java
 *
 *
 * @author 
 * @version 1.00 2019/3/11
 */


public class PruebaLibrerias {

    public PruebaLibrerias() {
    }
    
    public static void main (String[] args) {
    	

    	//Este es un comentario
    	Punto a,b;
    	a = new Punto (2,3);
    	b = new Punto (3,4);

	suma = a + b; 
	a = c + d; 
    resta = w - 2;
	multiplicacion = 2 * s;
	division = w / s
	
	
	
	
	a < b; 
	a > c;
	b <= c;
	b >= c;	
	a == b;
	a != b;
	a !  b;
    	
    	JOptionPane.showMessageDialog(null, "Punto A: " + a.toString() );
    	JOptionPane.showMessageDialog(null, "Punto B: " + b.toString() );
    	
    	Vehiculo volcho = new Vehiculo();
    	volcho.setAnio("2019");
    	volcho.setMarca("VW");
    	volcho.setModelo("Sedan");
    	volcho.setPrecio(150000.00);
    	JOptionPane.showMessageDialog(null, volcho.toString());
}
}