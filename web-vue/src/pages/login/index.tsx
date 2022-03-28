import ValidateInput from '@/components/validate-input';
import { defineComponent, ref } from 'vue';

const LoginPage = defineComponent({
  name: 'LoginPage',
  setup() {
    const email = ref('');

    return () => (
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <ValidateInput
            name="email"
            v-model={email.value}
            rules={[
              {
                type: 'string',
                required: true,
                message: '请输入邮箱',
              },
              {
                pattern: /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                message: '请输入正确的邮箱',
              },
            ]}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <ValidateInput type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  },
});

export default LoginPage;
