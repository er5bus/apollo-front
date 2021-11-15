import * as FIELDS from "./fieldsTypes"

import InputField from "./../inputs/InputField"
import TextareaField from "./../inputs/TextareaField"
//import SelectField from "./../inputs/SelectField"
//import RadioField from "./../inputs/RadioField"
//import AsyncSelectField from "./../inputs/AsyncSelectField"
//import CreatableSelectField from "./../inputs/CreatableSelectField"
//import CheckboxField from "./../inputs/CheckboxField"
//import DatePickerField from "./../inputs/DatePickerField"
//import WYSIWYGEditorField from "./../inputs/WYSIWYGEditorField"
//import UploadField from "./../inputs/UploadField"
//import CheckboxGroupField from "./../inputs/CheckboxGroupField"
//import InputMaskField from "./../inputs/InputMaskField"
//import TimePickerField from "./../inputs/TimePickerField"
//import MultiSelectTableField from "./../inputs/MultiSelectTableField"
//import PreloadedTableField from "./../inputs/PreloadedTableField"
//import WeekPickerField from "./../inputs/WeekPickerField"


export const DEFAULT_TYPE = InputField
export const FORM_COMPONENT = {
  [FIELDS.INPUT]: InputField,
  [FIELDS.TEXTAREA]: TextareaField,
//  [FIELDS.RADIO]: RadioField,
//  [FIELDS.ASYNC_SELECT]: AsyncSelectField,
//  [FIELDS.SELECT]: SelectField,
//  [INPUT_MASK]: InputMaskField,
//  [TIME_PICKER]: TimePickerField,
//  [CREATABLE_SELECT]: CreatableSelectField,
//  [CHECKBOX_GROUP]: CheckboxGroupField,
//  [CHECKBOX]: CheckboxField,
//  [WYSIWYG_EDITOR]: WYSIWYGEditorField,
//  [DATE_PICKER]: DatePickerField,
//  [UPLOAD]: UploadField,
//  [PRELOADED_TABLE]: PreloadedTableField,
//  [MULTISELECT_TABLE]: MultiSelectTableField,
//  [WEEK_PICKER]: WeekPickerField
}

