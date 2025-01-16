
package Testclass;
import java.util.Scanner;

public class lodge {
    static int b;

    public void display1() {
        System.out.println("\nthis is the LODGE in your city: ");
        System.out.println(
                "\n1. Cocoon Hotel\n2. Marriott Suites Pune\n3. NP hospitality,Magarpatta\n4. Deccan Harvest\n5. Treebo Trend Bhagyashree Executive\n6. Meghraj Lodge ");
    }

    public void display2() {
        lodge re = new lodge();
        do {
            Scanner sc = new Scanner(System.in);
            System.out.println("\nchoose the Resturnat no. for detail info:");
            int a = sc.nextInt();

            switch (a) {
                case 1:
                    System.out.println(
                            "\n*****Cocoon Hotel*****\nAddress:  Magarpatta City Hadapsar, Magarpatta City, 411013 Pune, , Pune\nTiming:  Open from 12:00 PM - 03:00 PM \nMobile:  9985748562\nRating:  4.2/5\n");
                    break;
                case 2:
                    System.out.println(
                            "\n*****Marriott Suites Pune*****\nAddress: Destination Centre, Magarpatta\nTiming:  Open from 11:00 AM - 11:00 PM \nMobile:  9587748562\nRating:  4.8/5\n");
                    break;
                case 3:
                    System.out.println(
                            "\n*****NP hospitality,Magarpatta*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  8547748562\nRating:  4.7/5\n");
                    break;
                case 4:
                    System.out.println(
                            "\n*****Deccan Harvest*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                    break;
                case 5:
                    System.out.println(
                            "\n*****Treebo Trend Bhagyashree Executive*****\nAddress: Destination Center, Magarpatta City, Magarpatta, Pune\nTiming:  Openfrom 01:00 AM - 11:00 PM\nMobile:  9137748562\nRating:  4.2/5 \n");
                    break;
                case 6:
                    System.out.println(
                            "\n*****Meghraj Lodge*****\nAddress: Survey 44, Kirtane Baug, Magarpatta Kharadi Bypass, Magarpatta, Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  9247748562\nRating:  4.8/5\n");
                    break;

                default:
                    System.out.println("You Enter Wrong choise");
                    break;
            }
            System.out.println(
                    "press 1 For serching other Restrutants ...\npress 2 number to Display Resturant twice...\npress any number to exit ");
            b = sc.nextInt();
        } while (b == 1);
        if (b == 2) {
            re.display1();
            re.display2();
        }
        if (b == 3) {

        }
    }
}
