// https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/PTAWBdwBwZwLhAd2QOnATygUxgYwE4CWU4ANgIYB2A5igPb7XBQXoD8ArjFgCJYBmhSlgBiDAMIUYMEYSykAJjAC84fBywAyLAA9sRALZZK4cqT64G5cAxVqNAYksKswALIBNAOKJQ1AF6gAIIAojziAAxeABwAQgCKAIx04rjiBrEAEkEAGgBybkEK1ABSAKwAkvgAKkE8AEyxIUEAMgbUANIA7EERAGp0QQCqQaQVBuQAVvGxHuIA6s2ZAMoeMBGtOgpDEQC0mdQ8ANYwAPIK9dSx-G6E4ABKFYnLQyWx1EGg5O9BWHk8QXiQQMbiwblIy0I0VAIQMQ3wQwAbJMAFoGCKIgDMUBCWA+uDc1USFRRAAUjiF7gAjIJHKBeebUUDzf6gIZA8govpAiqY0gAThK9yOiT6PD64BEiSgdD6t3EANimPImQipyGnQ6zV8zUGuESKKG0Q6OnqQ0IQQAUBhsAACe5YACOHEI+CwRhMpPIbpMtuUtoA3pbbbb+FhwLhQJD-Fg4LbKBwDFSsPgANyWgC+6etmCw9qdLrdHvA4lAhEUfsDwdtDBc+DjACJyHgG7aAD62hsuFvpjO2zT552u93GcBen3gbO4KQwW3j0dVkNQDhU0iEXC2t2OuMOodF0fzkzZkOWSgwey4Gz4AAUAEpFyHbeAyzAUFvK0HH4+wxGo4QY3GiQRAANNWIZZmBtqnjAdCkFgKCkHQ1DXs+hCvlut7puBmaWpa07NrOpblgotq6OAxhKHO3oLp+togLaIgVDkcZFCR5C2i4+FutWIDLqu64cVgXF5luO4FsOxZEYoWG2nxa4bqJg6FiOJhSQox5QXQZ4Xled4PiGMAcPod4ySGqHoU6H6QSG9EAALgDAuyENQlAMFg1m2igXnmW+TqgV+Ia1imjbdrgDb+Y+EFftBsHwYhyE+Rhpl0cAtotEhs4BjW+B1nGADkoWthm1bFcVeFaeesnUSYAD6QjnlQuB5v6wiIFRE4meV2lQWWih1dpjXNfGWBtWpnVAA

type RequirementParent = {
  fetchSize: number;
};

type RequirementChild = {
  order: "asc" | "desc";
} & RequirementParent;

class Parent {
  public req: RequirementParent;

  constructor() {
    this.req = {
      fetchSize: 10,
    };
    console.log(this.req);
  }
}

class Child extends Parent {
  // FIX: Add a declare
  //public declare req: RequirementChild;
  public req: RequirementChild;

  constructor() {
    super();
    this.req = {
      // @ts-ignore
      ...this.req,
      order: "desc",
    };
    console.log(this.req);
    // Logs { order: 'desc" }
  }
}

const parent_instance = new Parent();
const child_instance = new Child();
