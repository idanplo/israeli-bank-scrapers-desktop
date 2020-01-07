import { saveIntoAccount, getFromAccount } from '@/modules/encryption/keytar';

const ciEnvironmentVariableKey = 'GITHUB_ACTIONS';
const skip = (process.env[ciEnvironmentVariableKey] !== 'true');

describe('keytar.js', () => {
  (skip ? it.skip : it)('Should save and load password', async () => {
    const account = 'testingAccount';
    const password = 'testingPassword';

    await saveIntoAccount(account, password);
    const actualPassword = await getFromAccount(account);

    expect(actualPassword).equal(password);
  });
});
