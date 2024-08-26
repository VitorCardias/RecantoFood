import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.light_yellow,
        paddingRight: 12,
        paddingLeft: 12,
    },
    containerList: {
        flexGrow: 1,
    },
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
    },
    emptyText: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
    },
}