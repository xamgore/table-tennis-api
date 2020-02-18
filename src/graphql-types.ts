/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: Date,
};


export type GameResult = {
  player1: Scalars['Int'],
  player2: Scalars['Int'],
};

export type Image = {
   __typename?: 'Image',
  large: Scalars['String'],
  medium: Scalars['String'],
  thumbnail: Scalars['String'],
};

export type League = {
   __typename?: 'League',
  id: Scalars['Int'],
  title: Scalars['String'],
  imageUrl: Scalars['String'],
  matches: Array<Match>,
};

export type Match = {
   __typename?: 'Match',
  id: Scalars['Int'],
  status: MatchStatus,
  date: Scalars['DateTime'],
  place: MatchPlace,
  player1?: Maybe<Player>,
  player2?: Maybe<Player>,
  /** Short series up to 11 or 21 points */
  games: Array<Result>,
  /** Total results of all games during the match */
  result?: Maybe<Result>,
};

export enum MatchPlace {
  BigSportRoom = 'BIG_SPORT_ROOM',
  SmallSportRoom = 'SMALL_SPORT_ROOM',
  Hall = 'HALL'
}

export enum MatchStatus {
  StatusNotStarted = 'STATUS_NOT_STARTED',
  StatusPlaying = 'STATUS_PLAYING',
  StatusFinished = 'STATUS_FINISHED',
  StatusCancelled = 'STATUS_CANCELLED'
}

export type Mutation = {
   __typename?: 'Mutation',
  createMatch: Match,
  finishGame: Match,
};


export type MutationCreateMatchArgs = {
  leagueId: Scalars['Int'],
  place: MatchPlace,
  player1Id: Scalars['Int'],
  player2Id: Scalars['Int']
};


export type MutationFinishGameArgs = {
  matchId: Scalars['Int'],
  games: Array<GameResult>
};

export type Player = {
   __typename?: 'Player',
  id: Scalars['Int'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  birthDate: Scalars['DateTime'],
  age: Scalars['Int'],
  heightInCm: Scalars['Int'],
  weightInKg: Scalars['Int'],
  position: Scalars['String'],
  image: Image,
};

export type Query = {
   __typename?: 'Query',
  leagues: Array<League>,
  players: Array<Player>,
};


export type QueryLeaguesArgs = {
  ids?: Maybe<Array<Scalars['Int']>>
};

export type Result = {
   __typename?: 'Result',
  player1: Scalars['Int'],
  player2: Scalars['Int'],
};

export type Subscription = {
   __typename?: 'Subscription',
  matchAffected: Match,
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  League: ResolverTypeWrapper<League>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Match: ResolverTypeWrapper<Match>,
  MatchStatus: MatchStatus,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  MatchPlace: MatchPlace,
  Player: ResolverTypeWrapper<Player>,
  Image: ResolverTypeWrapper<Image>,
  Result: ResolverTypeWrapper<Result>,
  Mutation: ResolverTypeWrapper<{}>,
  GameResult: GameResult,
  Subscription: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Int: Scalars['Int'],
  League: League,
  String: Scalars['String'],
  Match: Match,
  MatchStatus: MatchStatus,
  DateTime: Scalars['DateTime'],
  MatchPlace: MatchPlace,
  Player: Player,
  Image: Image,
  Result: Result,
  Mutation: {},
  GameResult: GameResult,
  Subscription: {},
  Boolean: Scalars['Boolean'],
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = ResolversObject<{
  large?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  medium?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type LeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['League'] = ResolversParentTypes['League']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['MatchStatus'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  place?: Resolver<ResolversTypes['MatchPlace'], ParentType, ContextType>,
  player1?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>,
  player2?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>,
  games?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createMatch?: Resolver<ResolversTypes['Match'], ParentType, ContextType, RequireFields<MutationCreateMatchArgs, 'leagueId' | 'place' | 'player1Id' | 'player2Id'>>,
  finishGame?: Resolver<ResolversTypes['Match'], ParentType, ContextType, RequireFields<MutationFinishGameArgs, 'matchId' | 'games'>>,
}>;

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  heightInCm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  weightInKg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  leagues?: Resolver<Array<ResolversTypes['League']>, ParentType, ContextType, QueryLeaguesArgs>,
  players?: Resolver<Array<ResolversTypes['Player']>, ParentType, ContextType>,
}>;

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  player1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  player2?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  matchAffected?: SubscriptionResolver<ResolversTypes['Match'], "matchAffected", ParentType, ContextType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType,
  Image?: ImageResolvers<ContextType>,
  League?: LeagueResolvers<ContextType>,
  Match?: MatchResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Player?: PlayerResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Result?: ResultResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
