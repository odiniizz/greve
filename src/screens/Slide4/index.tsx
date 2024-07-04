import { ImageBackground, View, Text, Image } from "react-native"
import { styles } from './styles'
import { globalstyles } from '../../styles/globalstyles'
import { Unitario } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide4({ setPageI }: IPagina){
    const slide = require('../../assets/biscoitofundo.png')
    const cozinhando = require('../../assets/cozinhando.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            <View style={globalstyles.quadro}>
            <Text style={globalstyles.texto}>Coloque a mão na massa conosco e se divirta neste processo!</Text>
            </View>
            <View style={globalstyles.icone}>
                <Image source={cozinhando}></Image>
            </View>
            <View style={globalstyles.button}>
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <Unitario onPressI={() => setPageI(4)} />
                </View> 
            </View>
        </ImageBackground>
    )
}