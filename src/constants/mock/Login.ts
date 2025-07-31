export const MOCK_LOGIN_SUCCESS = {
  data: {
    isSuccess: true,
    code: "COMMON200",
    message: "성공입니다.",
    result: {
      "Refresh-Token": '"mocked-refresh-token"',
      userId: 1,
      social: "LOCAL"
    }
  },
  headers: {
    authorization: "Bearer mocked-access-token"
  }
};

export const MOCK_LOGIN_FAIL_PASSWORD = {
  response: {
    data: {
      isSuccess: false,
      code: "MEMBER4002",
      message: "비밀번호가 일치하지 않습니다."
    }
  }
};

export const MOCK_LOGIN_FAIL_ID = {
  response: {
    data: {
      isSuccess: false,
      code: "MEMBER4003",
      message: "해당 아이디를 가진 사용자가 존재하지 않습니다."
    }
  }
};
