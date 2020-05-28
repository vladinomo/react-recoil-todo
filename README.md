
## これは何
http://todomvc.com/examples/typescript-react/#/active
⇑これと同じ要件のものをReact + Recoil + Tailwind + Typescriptで実装してみる

#### やることリスト
1. 本番環境ビルド。デプロイ環境整備

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

```yarn test```
テスト

#### for VSCode
ESLintプラグイン入れて、とくにVSCodeのグローバル設定を何もいじってなければ、
セーブ時のLintとeslintルール/TSエラーのハイライトが効く
