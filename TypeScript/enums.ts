const enum seatChoice {
    AISLE = "aisle",
    MIDDLE = 10,
    WINDOW
}
//huge difference if you use const or not


let hcSeat = seatChoice.WINDOW;
hcSeat = seatChoice.AISLE;

