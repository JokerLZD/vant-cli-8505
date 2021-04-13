import { defineComponent, ref } from '@vue/composition-api';

import { Select } from 'element-ui';

import './index.scss';

export default defineComponent({
  name: 'BasicSelectTree',
  components: {
    Select,
  },
  props: {
    // 是否可清空
    clearable: { type: Boolean, default: true },
    // 是否多选
    multiple: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs }) {
    const selectValue = ref('');
    const selectRef = ref(null);

    return (
      <el-select
        class="basic-tree-select"
        v-model={selectValue.value}
        ref="select"
        popper-class="basic-tree-select__popper"
        clearable={props.clearable}
        multiple={props.multiple}
        {...{ props: attrs }}
      ></el-select>
    );
  },
});
