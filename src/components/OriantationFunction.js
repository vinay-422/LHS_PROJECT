import { Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function OriantationFunction() {
    const [screenInfo, setscreenInfo] = useState(Dimensions.get('screen'));

    useEffect
    (() => {
        const onChange = (result) => {
    
            setscreenInfo(result.screen);
        }

        const GETDETAILS = Dimensions.addEventListener('change', onChange);

        return () => GETDETAILS.remove()

    }, [])

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width
    }
}
