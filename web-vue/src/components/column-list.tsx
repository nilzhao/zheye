import { defineComponent, PropType } from 'vue';
import { ColumnItem } from '../types/column';

const ColumnList = defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnItem[]>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="row gy-2">
          {props.list.map((item) => {
            return (
              <div class="col-sm-6 col-lg-4" key={item.id}>
                <div class="card m-3">
                  <img src={item.avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">{item.desc}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  },
});
export default ColumnList;
