package Testclass;

import java.util.Scanner;

public class Mall {
    static int b;

    public void display1() {
        System.out.println(
                "\n1. Stationary\n2. Food Store\n3. cloths\n4. Technical ");
    }

    public void display2() {
        // Travel_agenices re = new Travel_agenices();
        Mall re = new Mall();
        do {
            Scanner sc = new Scanner(System.in);
            System.out.println("\nchoose your choise");
            int a = sc.nextInt();

            switch (a) {
                case 1:
                    System.out.println(
                            "\n1. Bombay Stationary\n2. Venus Tranders\n3. Balaji Books\n4. Royal Stationary\n5. Pooja Stationary ");
                    int z = sc.nextInt();
                    switch (z) {
                        case 1:
                            System.out.println(
                                    "\n*****Bombay Stationary*****\nAddress:  Magarpatta City Hadapsar, Magarpatta City, 411013 Pune, , Pune\nTiming:  Open from 12:00 PM - 03:00 PM \nMobile:  9985748562\nRating:  4.2/5\n");
                            break;
                        case 2:
                            System.out.println(
                                    "\n*****Venus Tranders*****\nAddress: Destination Centre, Magarpatta\nTiming:  Open from 11:00 AM - 11:00 PM \nMobile:  9587748562\nRating:  4.8/5\n");
                            break;
                        case 3:
                            System.out.println(
                                    "\n*****Balaji Books *****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  8547748562\nRating:  4.7/5\n");
                            break;
                        case 4:
                            System.out.println(
                                    "\n*****Royal Stationary*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                            break;
                        case 5:
                            System.out.println(
                                    "\n*****Pooja Stationary*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                            break;

                        default:
                            System.out.println("you Enter Wrong Choise");
                            break;
                    }

                    break;
                case 2:
                    System.out.println(
                            "\n1. Bombay Stationary\n2. Venus Tranders\n3. Balaji Books\n4. Royal Stationary\n5. Pooja Stationary ");
                    int m = sc.nextInt();
                    switch (m) {
                        case 1:
                            System.out.println(
                                    "\n*****Bombay Stationary*****\nAddress:  Magarpatta City Hadapsar, Magarpatta City, 411013 Pune, , Pune\nTiming:  Open from 12:00 PM - 03:00 PM \nMobile:  9985748562\nRating:  4.2/5\n");
                            break;
                        case 2:
                            System.out.println(
                                    "\n*****Venus Tranders*****\nAddress: Destination Centre, Magarpatta\nTiming:  Open from 11:00 AM - 11:00 PM \nMobile:  9587748562\nRating:  4.8/5\n");
                            break;
                        case 3:
                            System.out.println(
                                    "\n*****Balaji Books *****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  8547748562\nRating:  4.7/5\n");
                            break;
                        case 4:
                            System.out.println(
                                    "\n*****Royal Stationary*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                            break;
                        case 5:
                            System.out.println(
                                    "\n*****Pooja Stationary*****\nAddress: Magarpatta,Pune\nTiming:  Open from 12:00 PM - 04:00 PM \nMobile:  7547748562\nRating:  4.5/5\n");
                            break;

                        default:
                            System.out.println("you Enter Wrong Choise");
                            break;
                    }

                    break;

                default:
                    System.out.println("You Enter Wrong choise");
                    break;
            }
            System.out.println(
                    "press 1 For serching other Restrutants ...\npress 2 number to Display Resturant twice...\npress any number to exit ");
            b = sc.nextInt();
        } while (b == 1);
        if (b == 2)

        {
            re.display1();
            re.display2();
        }
        if (b == 3) {

        }
    }

}
