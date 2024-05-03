// Define a type alias for the country and category filter
type QueryFilter = {
    Countrycode?: null | number;
    Catcode?: null | number;
  };
  
  // Define a type alias for the handleQueryFilter function
  type HandleQueryFilter = (filter: QueryFilter) => void;
  
  // Define a type alias for the state value type
  export type QueryStateType = QueryFilter;
  
  // Define interfaces using the type aliases
  export interface LikeViewStatsType {
    viewCount: number;
    commentCount: number;
    likeCount: number;
  }
  
  export interface CardSectionType {
    queryState: QueryStateType;
  }
  
  export interface HandleQueryFilterType {
    handleQueryFilter: HandleQueryFilter;
  }
  