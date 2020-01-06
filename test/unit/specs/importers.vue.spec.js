import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import fakeStore from '../helpers/baseStore';
import Importers from '../../../src/renderer/components/MainPage/Importers';
import AddScraper from '../../../src/renderer/components/MainPage/Importers/AddScraper';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Importers', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(fakeStore);
    wrapper = shallowMount(Importers, { store, localVue });
  });

  it('Should contain an AddScraper component for each scraper', () => {
    const storeScrapers = fakeStore.modules.Scrapers.state.scrapers;
    expect(wrapper.findAll(AddScraper).length).equal(Object.keys(storeScrapers).length);
  });
});
