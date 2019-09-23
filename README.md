
## これは何
TSプロジェクトボイラープレート
Webpack + babel + eslint + vscode　環境用

#### やることリスト
1. babel+webpackでビルド　→　オワタ
2. eslint効かせてVSCODEで保存時にtypecheckとコードフォーマット →　おわた
3. webpackDevserverでホットリロード →　おわた
4. コミット時に型チェックとリントをhuskyで
5. 本番環境ビルド。デプロイ環境整備

## 使い方
#### 基本
```yarn watch```
localhost:8080でプロジェクト監視しながら開発
```yarn build:dev```
開発環境用ビルド
```yarn typecheck```
/src以下の型チェック
```yarn lint```
/src以下にLintかけてフィックス

#### for VSCode
ESLintプラグイン入れて、とくにVSCodeのグローバル設定を何もいじってなければ、
セーブ時のLintとeslintルール/TSエラーのハイライトが効く

## 参考資料
ベース　https://qiita.com/soarflat/items/d583356e46250a529ed5#typescript-eslint%E3%81%A8prettier%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97

webpack-dev-server設定 https://qiita.com/riversun/items/d27f6d3ab7aaa119deab
