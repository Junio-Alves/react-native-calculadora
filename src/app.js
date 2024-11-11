import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import Button from "./components/Button"
import Display from "./components/Display"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default function App() {
    const [displayValue, setDisplayValue] = useState(0)
    const addDigit = n => {
        setDisplayValue(n)
    }
    const clearMemory = () => {
        setDisplayValue("")
    }
    const setOperation = operation => {

    }

    return (
        <View style={style.container}>
            <Display value={displayValue} />
            <View style={style.button}>
                <Button label="AC" triple onClick={clearMemory} />
                <Button label="/" operation onClick={setOperation} />
                <Button label="7" onClick={addDigit} />
                <Button label="8" onClick={addDigit} />
                <Button label="9" onClick={addDigit} />
                <Button label="*" operation onClick={setOperation} />
                <Button label="4" onClick={addDigit} />
                <Button label="5" onClick={addDigit} />
                <Button label="6" onClick={addDigit} />
                <Button label="-" operation onClick={setOperation} />
                <Button label="1" onClick={addDigit} />
                <Button label="2" onClick={addDigit} />
                <Button label="3" onClick={addDigit} />
                <Button label="+" operation onClick={setOperation} />
                <Button label="0" double onClick={addDigit} />
                <Button label="." onClick={addDigit} />
                <Button label="=" operation onClick={setOperation} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        flexDirection: "row",
        flexWrap: "wrap"
    }

})