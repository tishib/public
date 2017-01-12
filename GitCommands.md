# Git Commands[元ネタ](https://www.atlassian.com/git/tutorials/)
---


### Setting up系
- カレントディレクトリ内のバージョン管理開始
```
git init
```

- バージョン管理対象の空のrepoを生成
```
git init {directory}
```

- ★
```
git init --bare {directory}
```

- リモートのrepoをコピー
```
git clone {repo} {directory}
```


### Stage in系
- ファイル単位でステージング
```
git add {file}
```

- ディレクトリ単位でステージング
```
git add {directory}
```


### Commit系
- メッセージ付き
```
git commit -m "{message}"
```

- すべての変更
```
git commit -a
```


### Stash(staged/unstaged両方)系
- 変更を退避
```
git stash
```

- Untracked fileごと退避
```
git stash -u/--include-untracked
```

- メッセージ付きで変更を退避
```
git stash save "{message}"
```

- 退避したstashのリスト
```
git stash list
```

- stashとdiff
```
git stash show
```

- 詳しくstashとdiff
```
git stash show -p/--patch
```

- stashベースでブランチ生成
```
git stash branch {branch} stash@{1}
```

- 退避を戻す
```
git stash pop // stashした内容は消える
```

- 退避を指定して戻す
```
git stash pop stash@{2}
```

- 退避を残して戻す(複数ブランチに退避を適用するときに使う)
```
git stash apply
```

- 退避を指定して削除
```
git stash drop stash@{1}
```

- 退避の履歴を見る
```
git log --oneline --graph@{0}
```

- 退避をすべて削除
```
git stash clear
```


### Ignore系
- Create Global Git ignore
```
touch ~/.gitignore
git config --global core.excludesFile ~/.gitignore
```


### Log系
- すべてのコミット履歴を表示
```
git log
```

- コミット数を指定して表示
```
git log -n {limit}
```

- すべてのコミット履歴を簡易表示
```
git log --oneline
```

- ファイル変更内容と変更行数も合わせて表示
```
git log --stat
```

- diffも合わせて表示
```
git log -p
```

- author指定して表示
```
git log --author="{author name}"
```

- MSGをgrepして表示
```
git log --grep="{message string}"
```

- commit idで範囲を指定して表示
```
git log {since}..{until}
```

- ファイルを指定して表示
```
git log {file name}
```

- グラフを追加して、華やかに表示
```
git log --graph --decorate --oneline
```


### Checkout系
- commit idとfile nameを指定してclient-fileをcheckout
```
git checkout {commit id} {file name}
```

- commit idを指定してclient-repoごとcheckout
```
git checkout {commit id} // uncommitedのファイルは影響受けない
```

- commit idを指定してcommitを取り消す
```
git revert {commit id} // {commit id}の内容を打ち消すcommitがされる、logにも残る
```

- stagingをキャンセル
```
git reset
```

- stagingファイルをキャンセル
```
git reset {file name}
```

- resetしてuntrackedになった削除可能の対象ファイル一案を表示
```
git clean -n
```

- すべてのuntrackedファイルの削除
```
git clean -f
```

- 指定されたuntrackedファイルの削除
```
git clean -df
```

- すべてのuntrackedファイル・ディレクトリの削除
```
git clean
```

- カレントディレクトリのすべてのuntrackedファイルの削除（ディレクトリの中身には影響しない）
```
git clean -xf
```

### Rewriting history系
- ひとつ前のcommitに変更を追加する
```
git commit --amend --no-edit // --no-editフラグで追加先commitのMSGなんかを特に変更しないことを宣言
```

- rebase
```
git checkout -b new-feature master
:
git checkout -b hotfix master
:
git checkout master
git merge hotfix
git branch -d hotfix
:
git checkout new-feature
git rebase master
```

- 対話的にrebase
```
git rebase -i master
```

- git上のあらゆる履歴を表示
```
git reflog [--relative-date]
```


### Collaborating系
- progress in


### tips
- copyしてstagedじゃないファイル(untracked file)、ignoredされてるファイルは退避できない
