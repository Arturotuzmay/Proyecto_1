/**
 * @(#)Programa_Ejemplo.java
 *
 *
 * @author 
 * @version 1.00 2019/10/2
 */


public class Programa_Ejemplo {

   
    
    public static void main (String[] args) {
    	
    //Este es un programa de ejemplo
    //Lenguajes y Automatas	
 	int res1, res2, res3, res4;
    int x = 10;
    int y = 20;
    int w = 15;
    
    System.out.println("\nEsta Seccion es De Numeros Booleanos\n");
    if (y<x){
    	System.out.println("Resultado 1");
    	}else
     if (y>x){
    	System.out.println("Resultado 2");
    	}else
     if (y<=x){
    	System.out.println("Resultado 3");
    	}else
     if (y>=x){
    	System.out.println("Resultado 4");
    	}else
 	 if (y!=x){
    	System.out.println("Resultado 5");
    	}else
     if (y==x){
    	System.out.println("Resultado 6");
    	}
    res1 = x + y;
    res2 = y - w;
    res3 = 2 * x;
    res4 = y / x;
    
    System.out.println("\n\nEsta Seccion Corresponde a Operaciones Basicas\n");
    
     System.out.println("Esta es una suma " + res1);
     System.out.println("Esta es una resta " + res2);
     System.out.println("Esta es una multiplicacion " + res3);
     System.out.println("Esta es una division " + res4);
    
    			
}
}