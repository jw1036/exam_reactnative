import { StyleSheet, Dimensions } from "react-native";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    city: {
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
    },
    cityName: {
        fontSize: 58,
        fontWeight: "500",
        color: "white",
    },
    weather: {
    },
    day: {
        width: SCREEN_WIDTH,
        alignItems: "flex-start",
        paddingHorizontal: 20,
    },
    temp: {
        marginTop: 50,
        fontWeight: "600",
        fontSize: 100,
        color: "white",
    },
    description: {
        marginTop: -10,
        fontSize: 30,
        color: "white",
        fontWeight: "500",
    },
    tinyText: {
        marginTop: -5,
        fontSize: 25,
        color: "white",
        fontWeight: "500",
    },
});
