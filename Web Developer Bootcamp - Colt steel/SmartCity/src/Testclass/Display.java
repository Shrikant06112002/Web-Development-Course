package Testclass;

// import Resturant;
import java.util.Scanner;

public class Display {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Resturant res = new Resturant();
        System.out.println(
                "*******************************************************************************\n*******************************************************************************\n \t\t\t\tSDS city Management\n*******************************************************************************\n*******************************************************************************");
        System.out.println("\nwelcome to your online smart city info application\n");
        System.out.println("#What are you searching ... ");
        System.out.println(
                "1. Resturant\n2. lodges\n3. Travel agenices\n4. Mall\n5. Emergency Services\n6. Education\n7. Tourism\n8. Takecare Centre\n9. Health deparment\n10. cab services\n11. Grommings ");
        System.out.println("pls choose the number for detail info:");
        int a = sc.nextInt();
        System.out.println();
        switch (a) {
            case 1:
                // res.display();
                // res.display2();
                // res.display3();
                break;

            default:
                break;
        }

    }
}
