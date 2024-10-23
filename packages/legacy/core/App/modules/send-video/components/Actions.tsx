import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Config } from 'react-native-config'

import Text from '../../../components/texts/Text'
import Title from '../../../components/texts/Title'

const Actions: React.FC = () => {
  const [prompts, setPrompts] = useState<{id: string, text: string}[]>([])

  useEffect(() => {
    fetch(`${Config.VIDEO_VERIFIER_HOST}/api/v1/session`, {method: 'POST'})
      .then(response => response.json())
      .then(sessionData => {
        console.log(sessionData)
        setPrompts(sessionData.prompts)
      })
  }, [])

  const styles = StyleSheet.create({
    instruction: {
      textAlign: 'left',
      fontSize: 20,
      fontFamily: 'Lato',
      fontWeight: '500',
      width: '100%',
    },

    instructionItem: {
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginVertical: '5%',
    },

    count: {
      fontSize: 22,
      fontFamily: 'Lato',
      fontWeight: '500',
    },
  })

  return (
    <>
      {prompts?.map((instruction, index) => (
        <View key={instruction.id} style={styles.instructionItem}>
          <Title style={styles.count}>{index + 1}.</Title>
          <Text style={styles.instruction}>{instruction.text}</Text>
        </View>
      ))}
    </>
  )
}

export default Actions
