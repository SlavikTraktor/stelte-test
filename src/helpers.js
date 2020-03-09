export const generateProfiles = (count = 40) => {
  const fakerator = Fakerator();
  let names = [];

  for (let i = 0; i < count; i++) {
    names = [
      ...names,
      { ...generateProfile(fakerator) }
    ];
  }

  return names;
};

export const generateProfile = (fi = undefined) => {
  const fakerator = fi || Fakerator();

  return { name: fakerator.names.name(), avatar: generateAvatar(fi) }
};

export const generateAvatar = (fi = undefined) => { 
  const fakerator = fi || Fakerator();

  return fakerator.internet.avatar()
}

