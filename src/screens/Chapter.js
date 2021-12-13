import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function Chapter() {
  return(
    <View style={{ height: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        <Text style={styles.title}>
          aaaaaaaa chapters 
        </Text>

        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam et erat ullamcorper rhoncus. Vestibulum accumsan iaculis lacus eget vulputate. Nulla fringilla diam cursus, ultricies ante vitae, dictum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed a porta erat. Phasellus vehicula congue neque, consequat ornare tortor volutpat sit amet. Vivamus finibus purus justo, sed venenatis dui commodo fermentum. Nullam a sem pretium, consequat tortor a, rutrum sem. Pellentesque semper tortor non vulputate dignissim. Quisque vulputate, arcu in mollis varius, dui purus condimentum tellus, quis dignissim ante nisl sit amet tortor. Vestibulum et volutpat tellus. Proin placerat, dolor sed rutrum efficitur, dolor sapien fermentum sem, in pretium lacus est maximus nisl. Vivamus accumsan semper lacus, finibus pulvinar orci dictum eu.

          Phasellus a lacus sed leo sollicitudin consectetur auctor non dolor. Vivamus sit amet ante egestas, ultricies tellus ullamcorper, pulvinar risus. Donec id scelerisque nunc. Pellentesque ac maximus odio. Fusce ex purus, eleifend quis mauris vel, cursus molestie eros. Morbi venenatis turpis felis, at pulvinar odio sodales sit amet. In finibus lectus non mattis imperdiet. Proin eget pellentesque tortor. In nibh erat, tincidunt sit amet rutrum eu, suscipit ac arcu. Pellentesque sodales, elit sit amet dictum tempus, felis tellus commodo sapien, nec auctor neque nulla ac purus.

          Integer aliquam dolor ut odio interdum, sit amet volutpat nulla eleifend. Quisque in scelerisque orci. Proin sodales leo faucibus eros tincidunt lobortis. Curabitur consequat aliquet nisi, a blandit neque iaculis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis ex augue. Fusce sit amet lobortis risus, id varius enim. Vestibulum pellentesque varius metus, quis hendrerit magna. Maecenas nunc libero, congue a libero eget, ultricies malesuada metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin mattis rutrum augue, ac dignissim nibh ultrices a. Aliquam sit amet ligula justo. In dapibus tortor vitae orci vestibulum tempus.

          Proin faucibus tempus justo, quis molestie sem eleifend ac. Morbi gravida augue lectus, vitae dapibus diam elementum et. Integer lorem orci, mollis nec venenatis eu, ultricies quis diam. Etiam pulvinar ante eu massa aliquam suscipit. Sed quis aliquam leo, vitae posuere lacus. Nam eget nisi vel purus pulvinar dapibus ut at purus. Sed porttitor libero sed luctus cursus. Donec interdum tristique nunc, sit amet fermentum urna rutrum sed. Curabitur consectetur, eros a consequat auctor, est erat hendrerit nisi, vitae tempus mauris turpis id ante. Suspendisse ullamcorper lacinia nibh, quis commodo massa iaculis vitae. Ut dapibus dui non mollis tempor. Suspendisse non dui et nisi eleifend blandit eu non quam. Aenean nec porttitor velit, ut aliquet tortor. Sed facilisis a nisi non rhoncus. Praesent dapibus sapien eget est hendrerit gravida.

          Morbi rhoncus mauris at turpis aliquam, tincidunt tempus purus consectetur. Pellentesque sed mauris a odio facilisis mattis. Nunc porttitor, felis a maximus scelerisque, sapien nulla dapibus dui, a placerat velit ligula eu metus. Etiam molestie vitae metus nec aliquet. Cras vel efficitur mauris, non dapibus odio. Aliquam a sapien dignissim, semper arcu non, ullamcorper est. Pellentesque nunc tortor, gravida vel blandit in, condimentum non lorem. Donec dapibus ante eget cursus rutrum. Nullam rutrum imperdiet purus sit amet rhoncus. Quisque sed auctor dolor, nec sagittis urna. Nullam faucibus in odio at varius. Cras nec velit in mauris fermentum bibendum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tristique sapien, ut ornare lacus. Fusce sodales vitae enim quis ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pretium enim et diam dapibus ornare. Etiam semper, sapien et luctus sagittis, ligula lacus dapibus ex, quis consectetur sapien arcu eu ligula. Etiam venenatis ultricies varius. Nulla vehicula nisi nec volutpat lacinia.

          Etiam tristique libero nec tincidunt porttitor. Vivamus ac semper orci. Curabitur lorem nulla, vestibulum id semper et, consectetur vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vitae euismod purus. Duis sed convallis nunc. In interdum varius cursus. Nulla gravida sem et orci sodales eleifend. Cras lobortis eget turpis vel dapibus. Nam sit amet vestibulum ipsum, et tempus lorem. Aenean non orci ipsum.

          Vestibulum sit amet nisi tellus. Cras convallis sapien vitae mi sollicitudin tristique. Quisque sed urna ut arcu condimentum gravida. Mauris at sollicitudin justo. Sed congue est nisl, sit amet laoreet enim sagittis et. Curabitur at libero at nulla scelerisque finibus. Cras consectetur, mi in tristique lobortis, erat velit laoreet odio, quis scelerisque risus odio hendrerit leo. Quisque placerat a dui mattis lacinia. Nulla cursus lacus neque, molestie varius velit auctor id.

          Praesent eros mauris, finibus ut lorem vel, eleifend vestibulum quam. Vestibulum ultricies accumsan urna nec malesuada. Integer accumsan finibus ex, a hendrerit ex vulputate a. Mauris quis risus venenatis, faucibus leo vitae, imperdiet quam. Curabitur sagittis facilisis tortor id consequat. Sed eget feugiat diam. Maecenas ultricies egestas ultricies. Phasellus enim ligula, fermentum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 10,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
    fontSize: 17
  }
});