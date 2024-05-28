let MOCK_DB = {
  something: 'cool',
  other: 'awesome',
};

// TODO: helper methods

export const updateMockDb = (body: object) => {
  MOCK_DB = { ...MOCK_DB, ...body };
};

export const getMockDb = () => {
  return MOCK_DB;
};
