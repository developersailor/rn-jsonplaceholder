import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, AutoImage, ListView } from "app/components"
import { useStores } from "app/models/helpers/useStores"
import { Photo } from "app/models"
import { ImageStyle, StyleProp, View, ViewStyle } from "react-native"

interface PhotosScreenProps extends AppStackScreenProps<"Photos"> {}

export const PhotosScreen: FC<PhotosScreenProps> = observer(function PhotosScreen() {
  const [refreshing] = React.useState(false)
  const [, setIsLoading] = React.useState(false)
  const { photoStore } = useStores()

  useEffect(() => {
    ;(async function load() {
      setIsLoading(true)
      await photoStore.fetchPhotos()
      setIsLoading(false)
    })()
  }, [photoStore])

  return (
    <Screen style={$root} preset="scroll">
      <ListView<Photo>
        data={photoStore.allPhotos.slice()}
        refreshing={refreshing}
        estimatedItemSize={177}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        contentContainerStyle={$flashListContentContainer}
      />
    </Screen>
  )
})

interface PhotoCardProps {
  photo: Photo
}

const PhotoCard: FC<PhotoCardProps> = observer(function PhotoCard({ photo }) {
  return (
    <View>
      <AutoImage style={$image} src={photo.url} />
      <Text>{photo.title}</Text>
    </View>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $flashListContentContainer: ViewStyle = {
  padding: 16,
}
const $image: StyleProp<ImageStyle> = {
  justifyContent: "center",
  width: 150,
  height: 150,
}
