import { describe } from 'riteway'
import { takeEvery, call, put } from 'redux-saga/effects'

import { actions } from './reducers'
import { loadPlaylist } from './services'

import {
  watchLoad,
  handleLoad,
} from './sagas'

describe('src/features/playlist/sagas', async assert => {})

describe('watchLoad()', async assert => {
  const iterator = watchLoad()

  assert({
    given: 'an action to load the playlist',
    should: 'handle load playlist requests',
    actual: iterator.next().value,
    expected: takeEvery(actions.load().type, handleLoad),
  })
})

describe('handleLoad()', async assert => {
  const playlist = {
    title: 'foo',
    songs: [],
  }

  const iterator = handleLoad()

  assert({
    given: 'a call to handle playlist load requests',
    should: 'call out to fetch the playlist',
    actual: iterator.next(playlist).value,
    expected: call(loadPlaylist),
  })

  assert({
    given: 'a successful call to fetch the playlist',
    should: 'set the playlist into the store',
    actual: iterator.next(playlist).value,
    expected: put(actions.received(playlist)),
  })
})

/*
describe('user-authentication-saga/watchSignOut()', async assert => {
  const iterator = watchSignOut();
  assert({
    given: 'sign out action',
    should: 'handle sign out requests',
    actual: iterator.next().value,
    expected: takeEvery(signOut().type, handleSignOut)
  });
});

describe('user-authentication-saga/watchSignInSuccess()', async assert => {
  const iterator = watchSignInSuccess();
  assert({
    given: 'sign in success action',
    should: 'handle sign in success',
    actual: iterator.next().value,
    expected: takeEvery(reportSignInSuccess().type, handleSignInSuccess)
  });
});

describe('user-authentication-saga/handleSignInSuccess() with existing user', async assert => {
  const uid = '123';
  const authedUser = { uid };
  const user = {
    uid,
    userId: uid,
    exists: true
  };

  const iterator = handleSignInSuccess(reportSignInSuccess(authedUser));

  {
    assert({
      given: 'sign in success action',
      should: 'fetch user from database',
      actual: iterator.next().value,
      expected: call(loadUserFromFirebase, uid)
    });
  }

  {
    assert({
      given: 'user exists',
      should: 'set user into store',
      actual: iterator.next(user).value,
      expected: put(setUserFromFirebase(user))
    });
  }
});

describe('user-authentication-saga/handleSignInSuccess() with new user', async assert => {
  const uid = '123';
  const authedUser = {
    uid,
    displayName: 'Warren',
    photoURL: 'warren.png',
    isAnonymous: false
  };

  const user = mapAuthedUserToAppUser(authedUser);

  const iterator = handleSignInSuccess(reportSignInSuccess(authedUser));

  {
    assert({
      given: 'sign in success action',
      should: 'fetch user from database',
      actual: iterator.next().value,
      expected: call(loadUserFromFirebase, uid)
    });
  }

  {
    assert({
      given: 'new user',
      should: 'save user data to firebase',
      actual: iterator.next().value,
      expected: call(saveUserToFirebase, authedUser)
    });
  }

  {
    assert({
      given: 'newly created user',
      should: 'set user into store',
      actual: iterator.next(user).value,
      expected: put(setUserFromFirebase(user))
    });
  }
});

describe('user-authentication-saga/handleStatusChange()', async assert => {
  {
    const iterator = handleStatusChange();
    const userId = '123';
    const genValue = iterator.next().value;
    genValue.PUT.action.payload.userId = userId;
    const userToSet = setUser({ userId });

    assert({
      given: 'undefined',
      should: 'dispatch setUser with anonymous user',
      actual: genValue,
      expected: put(userToSet)
    });

    assert({
      given: 'undefined then .next()',
      should: 'dispatch authenticationComplete()',
      actual: iterator.next().value,
      expected: put(authenticationComplete())
    });
  }

  {
    const iterator = handleStatusChange(null);

    assert({
      given: 'null',
      should: 'dispatch setUser with anonymous user',
      actual: iterator.next().value.PUT.action.payload.isAnonymous,
      expected: true
    });
  }
});

describe('user-authentication-saga/handleSignIn()', async assert => {
  {
    const iterator = handleSignIn();
    assert({
      given: 'no arguments',
      should: 'allow the user to sign in with GitHub',
      actual: iterator.next().value,
      expected: call(signInWithGitHub)
    });
  }
  {
    const iterator = handleSignIn();
    const error = { message: 'sign in failed' };
    iterator.next();
    assert({
      given: 'an error',
      should: 'report the error',
      actual: iterator.throw(error).value,
      expected: put(reportSignInFailure(error))
    });
  }
});

describe('user-authentication-saga/handleSignOut()', async assert => {
  {
    const iterator = handleSignOut();
    assert({
      given: 'no arguments',
      should: 'allow the user to sign out',
      actual: iterator.next().value,
      expected: call(signOutWithFirebase)
    });

    assert({
      given: 'next step',
      should: 'clear all localStorage keys',
      actual: iterator.next().value,
      expected: call(clearLocalStorage)
    });
  }
});
 * */
