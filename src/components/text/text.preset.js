import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export const BASE = {
    fontFamily: typography.primary,
    color: colors.white
}

export const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white
}

export const BOLD = {
    fontFamily:typography.bold,
    color: colors.white
}

export const presets = {
    default: typography.primary,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE,
        fontSize: 16,
    },
    small: {
        ...BASE,
        fontSize: 14,
        color:colors.gray
    }
}