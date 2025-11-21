// @vitest-environment nuxt
import { it } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ColorModePicker from '~/playground/components/ColorModePicker.vue'

/**
 * This test is added to show that the module still throws error
 * when testing in Nuxt environments in Vitest.
 * It's expected to fail with:
 * Cannot read properties of undefined (reading 'unknown')
 * but only if two or more tests are run in the same suite. Running
 * just one test will not trigger the error.
 */
it('should throw an error Cannot read properties of undefined (reading \'unknown\')', async () => {
  const { getByText } = await renderSuspended(ColorModePicker)

  getByText('Demo based on')
  getByText('module')
})
