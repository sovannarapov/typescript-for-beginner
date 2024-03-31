interface User {
    readonly dbId: number,
    email: string,
    name: string,
    googleId?: string,
    startTrail(): string, // or startTrail: () => string
    getCoupon(couponName: string, value: number): string
}

// Re-opening interface
interface User {
    gitToken: string;
}

// Inheritance
interface Admin extends User {
    role: "admin" | "manager";
}

const sovannara: Admin = {
    dbId: 123,
    email: "sovannara@gmail.com",
    name: "sovannara",
    gitToken: "github",
    role: "admin",
    startTrail: () => {
        return "The trail is starting"
    },
    getCoupon: (couponName: "Christmas coupon", discount: 20) => {
        return "This coupon is discount 20% off"
    }
}

console.log("This is sovannara information: ", sovannara);

export {}