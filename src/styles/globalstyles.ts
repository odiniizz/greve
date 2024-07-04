import {StyleSheet} from 'react-native'

export const globalstyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    quadro: {
        width: 400,
        height: 320,
        marginTop: 35,
        alignSelf: 'center'
    },

    texto: {
        color: '#000',
        textAlign: 'center',
        fontSize: 38,
        fontFamily: 'Itim_400Regular',
    },

    icone: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    buttonSpace: {
        paddingHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
})