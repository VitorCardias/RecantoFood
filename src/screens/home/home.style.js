import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.light_yellow,
        padding: 12,
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 15,
    },
    logo: {
        width: 220,
        height: 45,
    },
    cart: {
        width: 30,
        height: 30,
    }
}