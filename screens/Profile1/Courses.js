import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import mainColor from './constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  coursesColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  coursesIcon: {
    color: mainColor,
    fontSize: 30,
  },
  coursesNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  coursesNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  coursesRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  coursesText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

const Courses = ({ containerStyle,onPressEdit, name, courses, index }) => (
  <TouchableOpacity>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        {+index === 0 && (
          <Icon
            name="edit"
            underlayColor="transparent"
            iconStyle={styles.coursesIcon}
            onPress={() => onPressEdit()}
          />
        )}
      </View>
      <View style={styles.coursesRow}>
        <View style={styles.coursesColumn}>
          <Text style={styles.coursesText}>{courses}</Text>
        </View>
        
      </View>
    </View>
  </TouchableOpacity>
)

Courses.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  courses: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  onPressEdit: PropTypes.func.isRequired,
}

Courses.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Courses
