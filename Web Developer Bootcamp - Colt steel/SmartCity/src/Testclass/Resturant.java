package Testclass;

import java.util.Scanner;
// import package src.App;

public class Resturant {
    static int b;

    public void display1() {
        System.out.println("\nthis is the Resturants in your city: ");
        System.out.println(
                "\n1.The Cult - Terra\n2. Rolls Mania\n3. The Urban Kitchen\n4. Deccan Harvest\n5. City Cafe\n6. Z Plus ");
    }

    public void display2() {
        Resturant re = new Resturant();
        do {
            Scanner sc = new Scanner(System.in);
            System.out.println("\nchoose the Resturnat no. for detail info:");
            int a = sc.nextInt();

            switch (a) {
                case 1:
                    System.out.println(
                            "\n*****The Cult - Terra*****\nAddress: 133/4B, Mundhwa Annaxe, Near Mega Mills, Magarpatta, Pune\nTiming:  Open from 12:00 PM - 03:00 PM \nMobile:  9985748562\nRating:  4.2/5\n");
                    break;
                case 2:
                    System.out.println(
                            "\n*****Rolls Mania*****\nAddress: Destination Centre, Magarpatta\nTiming:  Open from 11:00 AM - 11:00 PM \nMobile:  9587748562\nRating:  4.8/5\n");
                    break;
                case 3:
                    System.out.println(
                            "\n*****The Urban Kitchen*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  8547748562\nRating:  4.7/5\n");
                    break;
                case 4:
                    System.out.println(
                            "\n*****Deccan Harvest*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                    break;
                case 5:
                    System.out.println(
                            "\n*****City Cafe*****\nAddress: Destination Center, Magarpatta City, Magarpatta, Pune\nTiming:  Openfrom 01:00 AM - 11:00 PM\nMobile:  9137748562\nRating:  4.2/5 \n");
                    break;
                case 6:
                    System.out.println(
                            "\n*****Z Plus*****\nAddress: Survey 44, Kirtane Baug, Magarpatta Kharadi Bypass, Magarpatta, Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  9247748562\nRating:  4.8/5\n");
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
